import {
  getMetadataByAttribute,
  filterMarkdownFilesByMetadataField
} from "$lib/markdown/utils";
import { BASE_DIR } from "$lib/markdown/constants";
import { createResponse } from "$lib/response";

/**
 * GET /content/category/[category]
 * Retrieves all front matter (metadata) for markdown files whose category matches the provided category.
 * @param {import('@sveltejs/kit').RequestEvent} event The request event object.
 * @returns {Response} JSON response with the front matter for the matching files.
 */
export async function GET({ params, url }) {
  const { category } = params;
  const searchParams = Object.fromEntries(url.searchParams);
  try {
    if (Object.values(searchParams).length) {
      //if search params provided
      const [[key, value]] = Object.entries(searchParams);
      const meta = getMetadataByAttribute({
        slug: value,
        title: value,
        alias: value
      });
      const matchingFiles = filterMarkdownFilesByMetadataField(key, meta);
      return new createResponse({ entries: matchingFiles, metadata: meta });
    } else {
      // if no search params provided
      const categoryMetadata = getMetadataByAttribute({
        slug: category,
        title: category,
        alias: category
      });
      
      if (!categoryMetadata) {
        return createResponse({ error: "Category not found" }, 404);
      }
      const matchingFiles = filterMarkdownFilesByMetadataField(
        "category",
        categoryMetadata
      );
      return new createResponse({
        entries: matchingFiles,
        metadata: categoryMetadata
      });
    }
  } catch (err) {
    return createResponse({ error: err.message }, 500);
  }
}
