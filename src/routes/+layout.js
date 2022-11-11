``
import landingMeta from './_metadata.json'
import { getPageEntries } from '$lib/content/queries';
import { page } from '$app/stores';
import { writable } from 'svelte/store';

function isTopLevelRoute(entry) {
  const pathArray = entry.relativePath.split("/").filter((v) => v.length !== 0);
  if (pathArray.length > 1) return false;
  return true;

}



async function getEntries(filter) {
  const entries = await getPageEntries()
  return !!filter ? entries.filter(filter) : entries
}
async function getEntry(uniqueFilter) {
  const entries = await getPageEntries()
  return !!uniqueFilter ? entries.find(uniqueFilter) : entries[0]
}

/** @type {import('../../.svelte-kit/types/src/routes/$types').LayoutServerLoad} */
export async function load({  url }) {
  
  const topLevelNavTargets = await getEntries(isTopLevelRoute);

  const breadcrumbs = writable([])


  page.subscribe(async (pageStore) => {
    const breadcrumbPromises = pageStore.url.pathname.split("/").map(async (pathSection) => {
      return await getEntry( e => e.relativePath.includes(pathSection))
  
    })
    // console.log(page.url.pathname)
    const updated = await Promise.all(breadcrumbPromises)
    breadcrumbs.set(updated)
  })

  return {
    breadcrumbs,
    navItems: topLevelNavTargets
  }

}
