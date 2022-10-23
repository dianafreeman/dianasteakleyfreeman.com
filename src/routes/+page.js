import { getCategories } from '$content/queries';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    const categories = await getCategories({ category: ""})
    // console.log(categories)
    return { 
        categories
    }
}