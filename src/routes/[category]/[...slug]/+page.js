import { getEntry, getCategory } from "$content/queries";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    
    const { category, slug } = params;
    
    const categoryEntry = await getCategory({category});
    const entry = await getEntry({ category }, slug);
    
    if (entry) {
        const image = `/images/${entry.image}`;
        return {
            entry,
            category: categoryEntry,
            slug,
            image,
        };
    } else {
        throw error(404)
    }
}