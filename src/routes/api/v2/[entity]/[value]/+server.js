import {
  getMetadataByAttribute,
  filterMarkdownFilesByMetadataField
} from "$lib/markdown/utils";
import { BASE_DIR } from "$lib/markdown/constants";
import { createResponse } from "$lib/response";
import { getEntriesBy } from "$lib/markdown/entries";
import { getMetaDetails, getMetaDetailsFor } from "$lib/markdown/metadata";

/**
 * GET /content/category/[category]
 * Retrieves all front matter (metadata) for markdown files whose category matches the provided category.
 * @param {import('@sveltejs/kit').RequestEvent} event The request event object.
 * @returns {Response} JSON response with the front matter for the matching files.
 */
export async function GET({ params }) {
  const { entity, value } = params;
  try {
    const metadata = getMetaDetailsFor(entity, value);
    const entries = getEntriesBy(entity, value);

    if (!metadata) {
      return createResponse({ error: `${entity} not found` }, 404);
    }

    return new createResponse({
      entries,
      metadata
    });
  } catch (err) {
    return createResponse({ error: err.message }, 500);
  }
}
