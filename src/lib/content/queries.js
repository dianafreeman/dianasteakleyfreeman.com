import { flattenModuleData, filterModulesByPathString, markdownPathToRelativePath } from "./helpers";


function getMetadataModuleMap() {
  return import.meta.glob("$routes/**/_metadata.json");
}

export function getMarkdownModuleMap() {
  return import.meta.glob("$routes/**/*.md");
}

export async function getModuleContent(moduleMap) {
  const entries = Object.entries(moduleMap)
  const promises = entries.map(async ([markdownPath, getter]) => [markdownPath, await getter()])
  const resolved = await Promise.all(promises)
  return Object.fromEntries(resolved)
}

/**
 *
 *
 * @export
 * @param { string }  sringMatcher
 * @returns { } 
 */
export function getMarkdownModules(stringMatcher) {
  const allModules = getMarkdownModuleMap()
  const results = filterModulesByPathString(allModules, stringMatcher)
  
  if (!stringMatcher) return modules
  if (stringMatcher && !results) return null
  return results
}

/**
 *
 *
 * @export
 * @param {*} stringMatcher
 * @returns 
 * example 
 * '/src/routes/blog/user-misdirection.md': {
    default: { render: [Function: render], '$$render': [Function: $$render] },
    metadata: [Getter],
    [Symbol(Symbol.toStringTag)]: 'Module'
  }
} 
 */

function changeEntryKeys(map){
  const entries = Object.entries(map).map(([mdPath, data]) => {
    const newPath = markdownPathToRelativePath(mdPath)
    return [newPath, data]
  } )
  return Object.fromEntries(entries)

}
export async function getMarkdownEntries(stringMatcher){
  const modules = await getMarkdownModules(stringMatcher)
  if (!modules) return null

  const renderable = await getModuleContent(modules);
  const withPathsAsKeys = changeEntryKeys(renderable)
  const entries = Object.entries(withPathsAsKeys).map(([relativePath, data]) => ({...data, relativePath}))
  return entries
}

// export async function getEntries(categoryParams) {
//   const modules = await getMarkdownModules(categoryParams);
//   return modules;
// }

// export async function getEntry({ category }, targetPath) {
//   const moduleEntries = await getEntries({ category });
//   const entry = moduleEntries.find((entry) => entry.path.includes(targetPath));
//   return entry;
// }
