import { getMarkdownEntries } from "$lib/content/queries";
import { error } from "@sveltejs/kit";

export const ssr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { category, entry } = params;
  const entries = await getMarkdownEntries(`${category}/${entry}`);
  if (entries && entries.length) {
    return {
      entry: entries[0]
    };
  } else {
    throw error(404);
  }
}
