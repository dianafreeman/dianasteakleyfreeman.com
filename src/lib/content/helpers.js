const CONTENT_ROOT = "/src/routes";


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


export function markdownPathToRelativePath(markdownPath) {
  const withoutRoot = removePatternFromString(markdownPath, CONTENT_ROOT);
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


function filterModules(modules, filterFn){
  const entries = Object.entries(modules)
  const filtered = entries.filter(filterFn)
  if (!filtered.length) return null;
  return Object.fromEntries(filtered)
}


export function filterModulesByPathString(moduleEntries, stringToMatch) {
  
  return filterModules(moduleEntries, ([path, _getter]) => path.includes(stringToMatch))
}


export function flattenModuleData(markdownPath, moduleData) {
  const relativePath = markdownPathToRelativePath(markdownPath);
  const { metadata } = moduleData;
  const withoutTitle = relativePathWithoutSlugChunk(relativePath, metadata.slug);
  const [category, subcategory] = withoutTitle.split("/");
  const categoryInfo = subcategory ? { category, subcategory } : { category };
  return { ...metadata, ...categoryInfo, path: relativePath };
}