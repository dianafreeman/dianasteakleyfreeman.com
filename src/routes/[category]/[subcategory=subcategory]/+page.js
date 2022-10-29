import { error } from "@sveltejs/kit";

import { getMarkdownEntries, getModuleContent } from "$lib/content/queries";

export const SSR = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { category, subcategory } = params;
  const entries = await getMarkdownEntries(`${category}/${subcategory}`)
  // $: activeRoute = $page.url.pathname.split("/").filter((v) => v.length)
  
  // $: category = activeRoute[0]
  // $: subcategory = SUBCATS.includes(activeRoute[1]) ? activeRoute[1] : null
  // $: active = subcategory ? activeRoute[2] : activeRoute[1]


  if (entries){    
    return {
      title: subcategory,
      entries,
    }
  };
}
