import fs from 'fs'
import path from 'path'

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
  const validDirectories = fs.readdirSync('./src/content', { withFileTypes: true}).filter(f => f.isDirectory() === true).map( d => d.name)
  if (!validDirectories.includes(category)) return [];
  // NOTE: `import.meta.globEager` method only accepts string literals
  switch (category) {
    case "blog":
      return import.meta.globEager("$content/blog/*");
    case "projects":
      return import.meta.globEager("$content/projects/**/*.md");
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
  return Object.entries(modulesWithPaths)
}

export async function getEntry(category, targetPath) {
  const entries = await getEntries(category);
  const entry = entries.filter(([filePath]) => filePath.includes(targetPath))[0];
  return entry;
}
