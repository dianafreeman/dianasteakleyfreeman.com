
import { getMarkdownEntries } from "$lib/content/queries";
import { error } from "@sveltejs/kit";

export const SSR = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { category, subcategory } = params;
  
  const entries = await getMarkdownEntries(`${category}/${subcategory}`)
  if (entries && entries.length){    
  return {
      entries
    }
  } else { 
    throw error(404)
  }
}
