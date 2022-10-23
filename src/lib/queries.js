const CONTENT_ROOT = "/src/routes"

export function stringWithoutString(string, stringToRemove) {
    return string.replace(new RegExp(stringToRemove, "g"), "")
}

export function markdownPathToRelativePath(filePath) {
    const withoutRoot = stringWithoutString(filePath, CONTENT_ROOT)
    let fileExtensionRegex = new RegExp(/\.(md|png|jpg|js)/, "g");
    return withoutRoot.replace(fileExtensionRegex, "");

}

export function relativePathWithoutSlugChunk(relPath, slug) {
    return relPath.split("/").filter(v => v.length > 1).filter(v => !v.includes(slug)).join("/")
}

export function flattenModuleData([markdownPath, moduleData]) {
    const { metadata } = moduleData
    const relativePath = markdownPathToRelativePath(markdownPath)
    const withoutTitle = relativePathWithoutSlugChunk(relativePath, metadata.slug)
    const [category, subcategory] = withoutTitle.split("/")
    const categoryInfo = subcategory ? { category, subcategory } : { category }
    // console.log({ ...metadata, ...categoryInfo, path: relativePath })
    return { ...metadata, ...categoryInfo, path: relativePath }
}

async function resolveMarkdown(params) {
    const modules = import.meta.glob("$content/**/*.md")
    const filteredModules = Object.entries(modules) //.filter(([path, _getter]) => {

    const promises = await filteredModules.map(async ([markdownPath, getter]) => [markdownPath, await getter()])
    // return Object.fromEntries(await Promise.all(promises))
    return await Promise.all(promises)
}

export async function getContent(params) {

    const resolvedModules = await resolveMarkdown(params)
    // exclude entries without metadata 
    const included = resolvedModules.filter(([_mdPath, obj]) => obj.metadata)
    const allModules = included.map(([markdownPath, obj]) => flattenModuleData(markdownPath, obj))

    const filtered = allModules.filter((data) => {
        if (params.subcategory && params.subcategory !== null) return data.subcategory === params.subcategory
        if (params.category && params.category !== null) return data.category === params.category
        return true
    })
    const resolved = await Promise.all(filtered)
    return resolved
}


export async function getEntries(categoryParams) {
    const modules = await getContent(categoryParams);
    return modules
}

export async function getEntry({ category }, targetPath) {
    const moduleEntries = await getEntries({ category })
    const entry = moduleEntries.find((entry) => entry.path.includes(targetPath));

    return entry
}

export async function getCategories() {
    const contentModules = await getContent({ category: null })
    let categories = []
    const moduleData = Object.values(contentModules)
    moduleData.forEach(moduleMeta => {
        const existingCategory = categories.find(c => c.name === moduleMeta.category)
        if (!existingCategory) {
            let newCategory
            const { subcategory } = moduleMeta
            if (subcategory) {
                const subcategories = [{ name: subcategory }]
                newCategory = { name: moduleMeta.category, subcategories }
            } else {
                newCategory = { name: moduleMeta.category }
            }
            categories.push(newCategory)
        } else {
            const { subcategory } = moduleMeta
            if (subcategory) {
                const subcategories = existingCategory.subcategories ? [...existingCategory.subcategories, { name: subcategory }] : [{ name: subcategory }]
                const allButExisting = categories.filter(c => c.name !== moduleMeta.category)
                categories = [...allButExisting, { name: moduleMeta.category, subcategories }]
            }
        }
    })
    // console.log('categories', categories)
    return categories
}

export async function getCategory({ category }) {
    const cats = await getCategories();
    return cats.find((c) => c.name === category)
}
