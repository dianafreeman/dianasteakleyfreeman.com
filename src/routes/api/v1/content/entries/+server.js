import { BASE_DIR } from "$lib/markdown/constants";
import { collectAllContentAndMetadata } from "$lib/markdown/entries";
import { createResponse } from "$lib/response";
export const prerender = true;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  try {
    const content = collectAllContentAndMetadata(BASE_DIR);

    return new createResponse(content);
  } catch (err) {
    return createResponse({ error: err.message }, 500);
  }
}
