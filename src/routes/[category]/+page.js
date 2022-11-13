
import { getMarkdownEntries } from "$lib/content/queries";
import { error } from "@sveltejs/kit";


export async function load({ params }) {
  const { category } = params;
  const entries = await getMarkdownEntries(category)

  if (entries && entries.length) {
    return {
      entries: entries,
      title: category
    }
  } else {
    throw error(404)
  }
}
