import { filterModuleMapByPathString, markdownPathToRelativePath } from "./helpers";

function useRelativePathKeys(map) {
  const entries = Object.entries(map).map(([mdPath, data]) => {
    const newPath = markdownPathToRelativePath(mdPath);
    return [newPath, data];
  });
  return Object.fromEntries(entries);
}

function getPageMetaModuleMap() {
  return import.meta.glob("$routes/**/_metadata.json");
}

export function getMarkdownModuleMap() {
  return import.meta.glob("$routes/**/*.md");
}

export async function getModuleContentMap(moduleMap) {
  const entries = Object.entries(moduleMap);
  const promises = entries.map(async ([markdownPath, getter]) => [markdownPath, await getter()]);
  const resolved = await Promise.all(promises);
  return Object.fromEntries(resolved);
}

export async function getStaticPageEntriesMap() {
  const pageMeta = getPageMetaModuleMap();
  const pageMetaContent = await getModuleContentMap(pageMeta);
  const withPathsAsKeys = useRelativePathKeys(pageMetaContent);
  return withPathsAsKeys;
}

export async function getStaticPageEntries() {
  const pageEntries = await getStaticPageEntriesMap();
  const valuesWithRelativePaths = Object.entries(pageEntries).map(([path, content]) => ({
    ...content,
    relativePath: `${path.charAt(0) === "/" ? "" : "/"}${path}`
  }));
  return valuesWithRelativePaths;
}

export function getMarkdownModules(stringMatcher) {
  const allModules = getMarkdownModuleMap();

  const results = filterModuleMapByPathString(allModules, stringMatcher);

  if (!stringMatcher) return allModules;
  if (stringMatcher && !results) return null;
  return results;
}

const STRINGS_THAT_ARE_NEVER_CATEGORIES = ["", "privacy", "privacy-policy", "about"]
function getEntryDataFromRelativePath(obj){
  const folders = obj.relativePath.split('/')
  const fileName = folders[folders.length - 1]
  const categoryDetails = folders.filter(folderName => ![obj.metadata.title, fileName,...STRINGS_THAT_ARE_NEVER_CATEGORIES].includes(folderName))
  const [entityType, category] = categoryDetails


  return {
    entityType,
    category
  }
  
}
export async function getMarkdownEntries(stringMatcher) {
  const modules = await getMarkdownModules(stringMatcher);
  if (!modules) return null;

  const renderable = await getModuleContentMap(modules);
  const withPathsAsKeys = useRelativePathKeys(renderable);
  const entries = Object.entries(withPathsAsKeys).map(([relativePath, data]) => ({
    ...data,
    metadata: { ...data.metadata, relativePath, ...getEntryDataFromRelativePath({relativePath,...data}) }
  }));
  // console.log(entries)
  return entries.filter((e) => e.metadata.draft !== true);
}

export async function getPageEntries() {
  const markdownEntriesRaw = await getMarkdownEntries();
  const staticEntriesRaw = await getStaticPageEntries();

  const markdownEntries = markdownEntriesRaw.map((obj) => {
    // we remove the component renderer from the return value because the component isn't serializable by the server-side load function
    // we only need it to render the full post, which we do on the entry page
    const { default: _componentRenderer, metadata } = obj; // eslint-disable-line no-unused-vars
    return metadata;
  });

  const staticEntries = staticEntriesRaw.map((obj) => {
    // we use the default here because static entries are JSON fikes
    return obj.default;
  });

  return [...staticEntries, ...markdownEntries];
}
