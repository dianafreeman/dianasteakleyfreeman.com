import { getPageEntries, getMarkdownEntries } from '$lib/content/queries';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').LayoutLoad} */
export async function load({ params }) {
  const results = await getPageEntries()
  const pageEntries = await getPageEntries()
  
  if (!pageEntries.length) throw error(404)
  return { pageEntries };

}
