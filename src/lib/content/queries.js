import { filterModuleMapByPathString, markdownPathToRelativePath } from "./helpers";

function useRelativePathKeys(map){
  const entries = Object.entries(map).map(([mdPath, data]) => {
    const newPath = markdownPathToRelativePath(mdPath)
    return [newPath, data]
  } )
  return Object.fromEntries(entries)
}

function getPageMetaModuleMap() {
  return import.meta.glob("$routes/**/_metadata.json");
}

export function getMarkdownModuleMap() {
  return import.meta.glob("$routes/**/*.md");
}

export async function getModuleContentMap(moduleMap) {
  const entries = Object.entries(moduleMap)
  const promises = entries.map(async ([markdownPath, getter]) => [markdownPath, await getter()])
  const resolved = await Promise.all(promises)
  return Object.fromEntries(resolved)
}

export async function getPageEntriesMap(){
  const pageMeta = getPageMetaModuleMap()
  const pageMetaContent = await getModuleContentMap(pageMeta)
  const withPathsAsKeys = useRelativePathKeys(pageMetaContent)
  return withPathsAsKeys
}

export async function getPageEntries(){
  const pageEntries = await getPageEntriesMap()
  const valuesWithRelativePaths = Object.entries(pageEntries).map(([path, content]) => ({...content, relativePath: `${path.charAt(0) === "/" ? "" : "/"}${path}`}))
  return valuesWithRelativePaths
}

export function getMarkdownModules(stringMatcher) {
  const allModules = getMarkdownModuleMap()
  const results = filterModuleMapByPathString(allModules, stringMatcher)
  
  if (!stringMatcher) return modules
  if (stringMatcher && !results) return null
  return results
}

export async function getMarkdownEntries(stringMatcher){
  const modules = await getMarkdownModules(stringMatcher)
  if (!modules) return null

  const renderable = await getModuleContentMap(modules);
  const withPathsAsKeys = useRelativePathKeys(renderable)
  const entries = Object.entries(withPathsAsKeys).map(([relativePath, data]) => ({...data, relativePath}))
  return entries
}


