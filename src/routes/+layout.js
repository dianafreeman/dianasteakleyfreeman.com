
  import landingMeta from './_metadata.json'
  import { getPageEntries, getMarkdownEntries } from '$lib/content/queries';

function isTopLevelRoute(entry) {
  const pathArray = entry.relativePath.split("/").filter((v) => v.length !== 0);
  if (pathArray.length > 1) return false;
  return true;
}
/** @type {import('./$types').LayoutLoad} */
export async function load({ params, url, routeId }) {
  const pageEntries = await getPageEntries()
  const mdEntries = params.entry ?
    params.subcategory ?  await getMarkdownEntries(`${params.category}/${params.subcategory}/${params.entry}`) : await getMarkdownEntries(`${params.category}/${params.entry}`) : null

  
  const navItems = pageEntries.filter(isTopLevelRoute);

  const category = params.category && pageEntries.find( e => e.relativePath === `/${params.category}`);
  const subcategory = params.subcategory && pageEntries.find( e => e.relativePath === `/${params.category}/${subcategory}`);
  const activeEntry = params.entry && mdEntries ? mdEntries[0] : null;

  let seoEntry = activeEntry ? activeEntry.metadata : (subcategory ? subcategory.default : category ? category.default : landingMeta)

  return {
    breadcrumbs: {
      category,
      subcategory,
      activeEntry,
    },
    seoMeta: seoEntry,
    navItems
  }

}
