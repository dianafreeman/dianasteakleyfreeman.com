import { getEntries } from "$content/helpers";
import { getCategory } from "$content/helpers";

export async function get({ params }) {
  const { category } = params;

  const categoryEntry = getCategory(category);
  const entries = await getEntries({ category });
  const hasEntries = !!entries && Object.keys(entries).length;

  if (hasEntries) {
    return {
      body: {
        title: category,
        entries: entries,
        category: categoryEntry,
        path: `/${categoryEntry.name}`
      }
    };
  } else {
    return {
      status: 404
    };
  }
}
