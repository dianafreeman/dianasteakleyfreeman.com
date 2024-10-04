import {
  getMetadataByAttribute,
  filterMarkdownFilesByContentType
} from "$lib/markdown/utils";
import { createResponse } from "$lib/response";
/**
 * GET /content/contentTypes/[typeName]
 * Retrieves all front matter for markdown files whose directory matches the provided typeName.
 */
export async function GET({ params }) {
  const { type } = params;

  try {
    const typeMetadata = getMetadataByAttribute("contentTypes", {
      slug: type,
      title: type,
      alias: type
    });

    if (!typeMetadata) {
      return createResponse({ error: "Content type not found" }, 404);
    }

    const matchingFiles = filterMarkdownFilesByContentType(typeMetadata);

    return new createResponse(matchingFiles);
  } catch (err) {
    return createResponse({ error: err.message }, 500);
  }
}
