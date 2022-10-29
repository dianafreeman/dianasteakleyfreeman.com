import { flattenModuleData } from "$lib/content/helpers";
import { getMarkdownEntries, getModuleContent } from "$lib/content/queries";

export const SSR = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { category } = params;
  const entries = await getMarkdownEntries(category)

  if (entries){    
    return {
      // title: "blog",
      entries,
    }
  };
}
