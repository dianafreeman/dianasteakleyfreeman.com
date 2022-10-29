import { getCategories } from "$lib/queries";

export let SSR = true
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const categories = await getCategories({ category: "" });
  
  return {
    categories
  };
}
