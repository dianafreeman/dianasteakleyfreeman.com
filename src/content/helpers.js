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
    return [markdownPath, { ...data, metadata: { ...data.metadata, category, subcategory } }];
  });
  return Object.fromEntries(newEntries);
}

function getContentImports({ category, subcategory }) {
  // console.log('category',category)
  const validDirectories = ["blog", "projects", "resources"];
  if (!validDirectories.includes(category)) return []

  // NOTE: `import.meta.globEager` method only accepts string literals
  switch (category) {
    case "blog":
      switch (subcategory) {
        default:
          return import.meta.globEager("$content/blog/*");
      }
    case "projects":
      switch (subcategory) {
        case "art":
          return import.meta.globEager("$content/projects/art/**/*.md");
        case "code":
          return import.meta.globEager("$content/projects/code/**/*.md");
        case "design":
          return import.meta.globEager("$content/projects/design/**/*.md");
        default:
          return import.meta.globEager("$content/projects/**/*.md");
      }
    case "gallery":
      switch (subcategory) {
        default:
          return import.meta.globEager("$content/gallery/**/*.md");
      }
    case "resources":
      switch (subcategory) {
        default:
          return import.meta.globEager("$content/resources/**/*.md");
      }
  }
}

export async function getEntries(categoryParams) {
  const modules = await getContentImports(categoryParams);
  const modulesWithPaths = decorateWithUrlPaths(modules);
  // console.log(modulesWithPaths)
  return Object.entries(modulesWithPaths);
}

export async function getEntry(categoryParams, targetPath) {
  const entries = await getEntries(categoryParams);
  const entry = entries.filter(([filePath]) => filePath.includes(targetPath))[0];
  return entry;
}
