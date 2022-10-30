import { getPageEntries, getMarkdownEntries } from '$lib/content/queries';
import { error } from '@sveltejs/kit';

function isTopLevelRoute(entry) {
  const pathArray = entry.relativePath.split("/").filter((v) => v.length !== 0);

  if (pathArray.length > 1) return false;
  return true;
}
/** @type {import('./$types').LayoutLoad} */
export async function load({ params, url, routeId }) {
  // const parent = await other.parent()
  // console.log(other)


  const pageEntries = await getPageEntries()
  const mdEntries = params.entry ?
    params.subcategory ?  await getMarkdownEntries(`${params.category}/${params.subcategory}/${params.entry}`) : await getMarkdownEntries(`${params.category}/${params.entry}`) : null

  
  const navItems = pageEntries.filter(isTopLevelRoute);
  const subcategory = params.subcategory || params.entry && params.entry.split("/").filter( v => v.length)[0]
    // console.log(params.subcategory || params.entry.split("/").filter( v => v.length)[0]) //.find( e => e.relativePath === `/${params.category}/${params.subcategory}`))

  return {
    breadcrumbs: {
      category: pageEntries.find( e => e.relativePath === `/${params.category}`),
      subcategory: pageEntries.find( e => e.relativePath === `/${params.category}/${subcategory}`),
      activeEntry: mdEntries ? mdEntries[0] : null
    },
    navItems
  }
  // }
  // }
  // if (!params.category) return { pageEntries }
  // if (!params.subcategory) return { pageEntries: pageEntries.find( entry => entry.relativePath === `/${params.category}`)}
  // // return { pageEntries: pageEntries.find( v => v.relativePath === `/${$params.category}/${params.subcategory}`)}
  // const categoryEntry = !$page.params.category ? null : pageEntries.find( v => v.relativePath === `/${$page.params.category}`)

}
