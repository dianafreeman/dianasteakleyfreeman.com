import { getAllEntryMeta } from "$lib/markdown/metadata";
import { createResponse } from "$lib/response";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  try {
    const result = getAllEntryMeta();

    return createResponse(result);
  } catch (err) {
    return createResponse({ error: err.message }, 500);
  }
}
