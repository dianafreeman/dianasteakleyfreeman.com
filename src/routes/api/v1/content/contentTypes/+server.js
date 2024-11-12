import { BASE_DIR } from "$lib/markdown/constants";
import { collectContentTypes } from "$lib/markdown/contentTypes";
import { createResponse } from "$lib/response";
export const prerender = true;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  try {

    // Collect types (subdirectory names)
    const types = collectContentTypes(BASE_DIR);

    return new createResponse({types})
  } catch (err) {
    return createResponse({ error: err.message }, 500)
  }
}
