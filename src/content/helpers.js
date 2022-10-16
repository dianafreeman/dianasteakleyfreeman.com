import LayoutStore from "$stores/LayoutStore";

function filePathToUrlPath(filePath) {
  let validUrlPath = filePath.substring(1); // trim period from relative path
  let regex = new RegExp(/\.(md|png|jpg)/, "g");
  let noFileExtension = validUrlPath.replace(regex, "");
  return noFileExtension;
}

function decorateWithUrlPaths(entries) {
  let newEntries = Object.entries(entries).map(([markdownPath, data]) => {
    // remove period from relative path
    let urlPath = filePathToUrlPath(markdownPath);
    const [category, subcategory, ...rest] = urlPath.split("/").filter(s => s.length > 0)
    return [markdownPath, { ...data, metadata: { ...data.metadata, category, subcategory , path: urlPath} }];
  });
  return Object.fromEntries(newEntries);
}

function getContentImports({ category, subcategory }) {
  const { validCategories } = LayoutStore
  if (!validCategories.includes(category)) return []

  // NOTE: `import.meta.globEager` method only accepts string literals
  switch (category) {
    case "blog":
      switch (subcategory) {
        default:
          return import.meta.globEager("$content/blog/*");
      }
    case "gallery":
      switch (subcategory) {
        case "art":
          return import.meta.globEager("$content/gallery/art/**/*.md");
        case "code":
          return import.meta.globEager("$content/gallery/code/**/*.md");
        case "design":
          return import.meta.globEager("$content/gallery/design/**/*.md");
        default:
          return import.meta.globEager("$content/gallery/**/*.md");
      }
    case "resources":
      // switch (subcategory) {
        default:
          return import.meta.globEager("$content/resources/**/*.md");
      // }
  }
}

export async function getEntries(categoryParams) {
  const modules = await getContentImports(categoryParams);
  const modulesWithPaths = decorateWithUrlPaths(modules);
  return Object.entries(modulesWithPaths);
}

export async function getEntry(categoryParams, targetPath) {
  const entries = await getEntries(categoryParams);
  const entry = entries.filter(([filePath]) => filePath.includes(targetPath))[0];
  return entry;
}


export function getCategories() {
  const filePaths = Object.keys(import.meta.globEager("$content/**/*"))

  // TODO: make this an array
  const categories = {}

  filePaths.forEach(path => {
    
    const cleanPath = path.split("/").filter(v => v !== "." && v.length > 0)
    const directoryEntries = cleanPath.map(p => p.split('/').filter(val => !val.match(/\.(png|js|md|jpg|jpeg)/))).flat()
    const [entryCategory, entrySubcategory] = directoryEntries

    if (entryCategory) {
      const categoryExists = categories[entryCategory]
      if (!categoryExists) {
        categories[entryCategory] = { name: entryCategory }
      }
      if (entrySubcategory) {
        const existingSubcategories = categories[entryCategory].subcategories
        const subcategoriesExists = !!existingSubcategories
        if (!subcategoriesExists) {
          categories[entryCategory] = {
            ...categories[entryCategory],
            subcategories: [{ name: entrySubcategory }]
          }
        } else {
          const entrySubcategoryExists = existingSubcategories.filter(obj => obj.name === entrySubcategory).length > 0
          if (!entrySubcategoryExists) {
            categories[entryCategory] = {
              ...categories[entryCategory],
              subcategories: [...existingSubcategories, { name: entrySubcategory }]
            }
          }

        }
      }
    }
  })
  // TODO: make this an array from the get-go
  return Object.values(categories)
}

export function getCategory(category){
  const cats = getCategories()
  return cats.find( c => c.name === category)
}