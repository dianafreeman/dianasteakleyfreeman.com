import { markdownPathToRelativePath, relativePathWithoutSlugChunk } from "./helpers";

export function flattenModuleData([markdownPath, moduleData]) {
  const { metadata } = moduleData;
  const relativePath = markdownPathToRelativePath(markdownPath);
  const withoutTitle = relativePathWithoutSlugChunk(relativePath, metadata.slug);
  const [category, subcategory] = withoutTitle.split("/");
  const categoryInfo = subcategory ? { category, subcategory } : { category };
  return { ...metadata, ...categoryInfo, path: relativePath };
}

async function resolveMarkdown() {
  const modules = import.meta.glob("$routes/**/*.md");
  const moduleEntries = Object.entries(modules); //.filter(([path, _getter]) => {

  const promises = await moduleEntries.map(async ([markdownPath, getter]) => [
    markdownPath,
    await getter()
  ]);
  return await Promise.all(promises);
}

export async function getMarkdownContent(params) {
  const resolvedModules = await resolveMarkdown();
  // exclude entries without metadata
  const included = resolvedModules.filter(([_mdPath, obj]) => obj.metadata);
  const allModules = included.map(([markdownPath, obj]) => flattenModuleData(markdownPath, obj));

  const filtered = allModules.filter((data) => {
    if (params.subcategory && params.subcategory !== null)
      return data.subcategory === params.subcategory;
    if (params.category && params.category !== null) return data.category === params.category;
    return true;
  });
  const resolved = await Promise.all(filtered);
  return resolved;
}

export async function getEntries(categoryParams) {
  const modules = await getMarkdownContent(categoryParams);
  return modules;
}

export async function getEntry({ category }, targetPath) {
  const moduleEntries = await getEntries({ category });
  const entry = moduleEntries.find((entry) => entry.path.includes(targetPath));

  return entry;
}

export async function getCategories() {
  const contentModules = await getMarkdownContent();
  let categories = [];
  const moduleData = Object.values(contentModules);
  moduleData.forEach((moduleMeta) => {
    const existingCategory = categories.find((c) => c.name === moduleMeta.category);
    if (!existingCategory) {
      let newCategory;
      const { subcategory } = moduleMeta;
      if (subcategory) {
        const subcategories = [{ name: subcategory }];
        newCategory = { name: moduleMeta.category, subcategories };
      } else {
        newCategory = { name: moduleMeta.category };
      }
      categories.push(newCategory);
    } else {
      const { subcategory } = moduleMeta;
      if (subcategory) {
        const subcategories = existingCategory.subcategories
          ? [...existingCategory.subcategories, { name: subcategory }]
          : [{ name: subcategory }];
        const allButExisting = categories.filter((c) => c.name !== moduleMeta.category);
        categories = [...allButExisting, { name: moduleMeta.category, subcategories }];
      }
    }
  });
  // console.log('categories', categories)
  return categories;
}

export async function getCategory({ category }) {
  const cats = await getCategories();
  return cats.find((c) => c.name === category);
}
