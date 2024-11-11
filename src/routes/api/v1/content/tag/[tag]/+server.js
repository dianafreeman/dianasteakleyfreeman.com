import { getMetadataByAttribute, filterMarkdownFilesByMetadataField } from "$lib/markdown/utils";
import { BASE_DIR } from "$lib/markdown/constants";
import { createResponse } from "$lib/response";

/**
 * GET /content/tags/[tag]
 * Retrieves all front matter for markdown files whose tags match the provided tagName.
 */
export async function GET({ params }) {
  const { tag } = params;

  try {
    const tagMetadata = getMetadataByAttribute("tags", {
      slug: tag,
      title: tag,
      alias: tag,
    });

    if (!tagMetadata) {
      return createResponse({ error: "Tag not found" }, 404)
    }
    
    const matchingFiles = filterMarkdownFilesByMetadataField("tags", tagMetadata);

    return createResponse(matchingFiles)
  } catch (err) {
    return createResponse({ error: err.message }, 500)
  }
}