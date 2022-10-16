import { getEntries,getCategory } from "$content/helpers";

export async function get({ params }) {
  const { category, subcategory } = params;
  const categoryEntry = getCategory(category)
  const entries = await getEntries({category, subcategory});
  const hasEntries = !!entries && Object.keys(entries).length;

  if (hasEntries) {
    return {
      body: {
        title: category,
        entries: entries,
        category: categoryEntry,
        subcategory: categoryEntry.subcategories.find(s => s.name === subcategory)
      }
    };
  } else {
    return {
      status: 404
    };
  }
}
