
import { getMarkdownEntries } from "$lib/content/queries";
import { error } from "@sveltejs/kit";

export const SSR = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { category, subcategory, entry } = params;
  const entries = await getMarkdownEntries(`${category}/${subcategory}/${entry}`)
  if (entries.length){    
  return {
      entry: entries[0]
    }
  } else { 
    throw error(404)
  }
}
