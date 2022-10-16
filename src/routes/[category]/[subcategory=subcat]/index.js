import { getEntries } from "$content/helpers";

export async function get({ params }) {
  const { category, subcategory } = params;
  const entries = await getEntries({category, subcategory});
  const hasEntries = !!entries && Object.keys(entries).length;

  if (hasEntries) {
    return {
      body: {
        title: category,
        entries: entries,
        category,
        subcategory,
      }
    };
  } else {
    return {
      status: 404
    };
  }
}
