import { collectAllTags } from "$lib/markdown/tags";
import { BASE_DIR } from "$lib/markdown/constants";
import { createResponse } from "$lib/response";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  try {
    // Collect all tags from markdown files
    const tags = collectAllTags(BASE_DIR);

    // Return the unique tags as a JSON response
    return createResponse({ tags });
  } catch (err) {
    return createResponse({ error: err.message }, 500);
  }
}
