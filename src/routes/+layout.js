``
import landingMeta from './_metadata.json'
import { getPageEntries } from '$lib/content/queries';
import { page } from '$app/stores';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

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
export async function load({ url }) {

  const topLevelNavTargets = await getEntries(isTopLevelRoute);

  let breadcrumbs = []

  if (browser) {
    const breadcrumbPromises = Array.from(new Set(url.pathname.split("/"))).map(async (pathSection) => {
      return await getEntry(e => e.relativePath.includes(pathSection))
    })
    const updated = await Promise.all(breadcrumbPromises)
    breadcrumbs = updated
  }

  return {
    breadcrumbs,
    navItems: topLevelNavTargets
  }

}
