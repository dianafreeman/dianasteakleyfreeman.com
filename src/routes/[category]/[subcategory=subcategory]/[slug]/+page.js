import { error } from "@sveltejs/kit";
import { getMarkdownEntries } from "$lib/content/queries";

export async function load({ params }) {
  const { category, subcategory, slug } = params
  const entries = await getMarkdownEntries(`${category}/${subcategory}/${slug}`)
  const entry = entries[0]
  if (entry) {
    return {
      component: entry.default,
      entry,
    };
  } else {
    throw error(404, "Not Found");
  }
}
