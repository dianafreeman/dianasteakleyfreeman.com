import { getMetaDetailsFor } from "$lib/markdown/metadata";
import { createResponse } from "$lib/response";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({params}) {
  try {
    const result = getMetaDetailsFor(params.entity);

    return createResponse(result);
  } catch (err) {
    return createResponse({ error: err.message }, 500);
  }
}
/*
localhost:5173/api/v2/tags
localhost:5173/api/v2/category
*/