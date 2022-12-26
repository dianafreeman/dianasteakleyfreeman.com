import { getMarkdownEntries } from "$lib/content/queries";
import { error } from "@sveltejs/kit";
import { reduceEntriesTo } from "$stores/SortAndFilterStore";

export async function load({ params }) {
  const { category } = params;
  const entries = await getMarkdownEntries(category);

  if (entries && entries.length) {
    const tags = reduceEntriesTo("tags", entries);
    return {
      entries: entries,
      title: category,
      filters: { tags }
    };
  } else {
    // admin page escape hatch
    if (category !== "admin") {
      throw error(404);
    }
  }
}
