import { getMetadataByAttribute, filterMarkdownFilesByMetadataField } from "$lib/markdown/utils";
import { BASE_DIR } from "$lib/markdown/constants";
import { createResponse } from "$lib/response";

/**
 * GET /content/category/[category]
 * Retrieves all front matter (metadata) for markdown files whose category matches the provided category.
 * @param {import('@sveltejs/kit').RequestEvent} event The request event object.
 * @returns {Response} JSON response with the front matter for the matching files.
 */
export async function GET({ params }) {
  const { category } = params;

  try {
    const categoryMetadata = getMetadataByAttribute("categories", {
      slug: category,
      title: category,
      alias: category,
    });

    if (!categoryMetadata) {
        return createResponse({ error: "Category not found" }, 404)
    }

    // Use the helper function to filter markdown files by category
    const matchingFiles = filterMarkdownFilesByMetadataField("category", categoryMetadata);

    return new createResponse(matchingFiles)
  } catch (err) {
    return createResponse({ error: err.message }, 500)
  }
}
