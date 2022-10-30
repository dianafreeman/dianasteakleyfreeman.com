
import { getMarkdownEntries } from "$lib/content/queries";
import { error } from "@sveltejs/kit";

export const SSR = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params, data }) {
  const { category } = params;
  const entries = await getMarkdownEntries(category)
  if (entries.length){    
  return {
      entries
    }
  } else { 
    throw error(404)
  }
}
