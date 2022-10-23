import { getCategories } from '$lib/queries';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    const categories = await getCategories({ category: ""})
    
    return { 
        categories
    }
}