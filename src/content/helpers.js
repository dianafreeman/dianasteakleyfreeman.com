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

    return [markdownPath, { ...data, metadata: { ...data.metadata, path: urlPath } }];
  });
  return Object.fromEntries(newEntries);
}

function getContentImports(category) {
  // NOTE: `import.meta.globEager` method only accepts string literals
  switch (category) {
    case "blog":
      return import.meta.globEager("$content/blog/*");
    case "projects":
      return import.meta.globEager("$content/projects/*");
    default:
      return import.meta.globEager("$content/**/*");
  }
}

export async function getPageData() {
  return import.meta.globEager("$content/pageData/*");
}

export async function getEntries(category) {
  const modules = await getContentImports(category);
  const modulesWithPaths = decorateWithUrlPaths(modules);
  return modulesWithPaths;
}

export async function getEntry(targetPath) {
  const entries = await getEntries();

  const entry = Object.entries(entries).filter(([filePath, entry]) =>
    entry.metadata.path.match(targetPath)
  )[0];

  return entry;
}
