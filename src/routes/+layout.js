import { getCategories } from "$lib/queries";
  
/** @type {import('./$types').LayoutLoad} */
export async function load({category}) {
    const categories = await getCategories({category})
    
    return { categories }
  }