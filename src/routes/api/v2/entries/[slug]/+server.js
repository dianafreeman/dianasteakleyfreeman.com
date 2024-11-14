import { getEntryBy } from "$lib/markdown/entries";
import { createResponse } from "$lib/response";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({params}) {
  try {
    const result = getEntryBy('slug', params.slug)

    // Return the category structure as a JSON response
    return createResponse(result);
  } catch (err) {
    return createResponse({ error: err.message }, 500);
  }
}
