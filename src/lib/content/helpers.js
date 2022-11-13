const CONTENT_ROOT = "/src/routes";
const METADATA_NAME = "/_metadata.json";


/**
 *
 * Remove pattern from string
 * 
 * @param {string} string -- string with characters that should be removed
 * @param { pattern } pattern -- regex compatible pattern of characters to remove
 * @returns { string } 
 */
function removePatternFromString(string, pattern) {
  return string.replace(new RegExp(pattern, "g"), "");
}

export function removeTrailingSlash(path){
  if (!path) return
  let starts = path.charAt(0) === "/"
  let ends = path.charAt(path.length - 1) === "/"
  if (starts && ends){ 
    return path.slice(1, -1)
  } else if (starts){
    return path.substring(1)
  } else if (ends){
    return path.slice(0, -1)
  }
  return path
}
export function markdownPathToRelativePath(markdownPath) {
  const withoutRoot = removePatternFromString(markdownPath, CONTENT_ROOT);
  const withoutMetadataName = removePatternFromString(withoutRoot, METADATA_NAME);
  const fileExtensionRegex = new RegExp(/\.(md|png|jpg|js|json)/, "g");
  const withoutFileExtension = withoutMetadataName.replace(fileExtensionRegex, "")
  return withoutFileExtension
}

export function relativePathWithoutSlugChunk(relPath, slug) {
  return relPath
    .split("/")
    .filter((v) => v.length > 1)
    .filter((v) => !v.includes(slug))
    .join("/");
}


export function filterModuleMap(modules, filterFn){
  const entries = Object.entries(modules)
  const filtered = entries.filter(filterFn)
  if (!filtered.length) return null;
  return Object.fromEntries(filtered)
}


export function filterModuleMapByPathString(moduleMap, stringToMatch) {
  const queryString = removeTrailingSlash(stringToMatch)
  return filterModuleMap(moduleMap, ([path, _getter]) => path.toString().includes(queryString))
}
