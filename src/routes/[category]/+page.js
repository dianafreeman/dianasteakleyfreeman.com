import { getCategory,getEntries } from "$content/queries";
import { error } from "@sveltejs/kit";

export const SSR = true
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

  const { category } = params;

  const categoryEntry = await getCategory({category});
  const entries = await getEntries({ category });
  const hasEntries = !!entries && Object.keys(entries).length;

  if (hasEntries) {
    return {
        title: category,
        entries: entries,
        category: categoryEntry,
        path: `/${category}`
    };
  } else {
   throw error(404)
  }
}
