const CONTENT_ROOT = "/src/routes";

export function stringWithoutString(string, stringToRemove) {
  return string.replace(new RegExp(stringToRemove, "g"), "");
}

export function markdownPathToRelativePath(filePath) {
  const withoutRoot = stringWithoutString(filePath, CONTENT_ROOT);
  let fileExtensionRegex = new RegExp(/\.(md|png|jpg|js)/, "g");
  return withoutRoot.replace(fileExtensionRegex, "");
}

export function relativePathWithoutSlugChunk(relPath, slug) {
  return relPath
    .split("/")
    .filter((v) => v.length > 1)
    .filter((v) => !v.includes(slug))
    .join("/");
}


export function filterModules(modules, filterFn){
  const entries = Object.entries(modules)
  const filtered = entries.filter(filterFn)
  return Object.fromEntries(filtered)
}
export function filterModulesByPathString(modules, stringToMatch) {
  return filterModules(modules, ([path, _getter]) => path.includes(stringToMatch))
}
