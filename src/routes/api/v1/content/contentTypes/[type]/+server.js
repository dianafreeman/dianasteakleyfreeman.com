import {
  getMetadataByAttribute,
  getMarkdownFilesByContentType,
  filterMarkdownFilesByMetadataField
} from "$lib/markdown/utils";
import { createResponse } from "$lib/response";
/**
 * GET /content/contentTypes/[typeName]
 * Retrieves all front matter for markdown files whose directory matches the provided typeName.
 */
export async function GET({ params, url }) {
  const { type } = params;
  const searchParams = Object.fromEntries(url.searchParams);

  try {
    const typeMetadata = getMetadataByAttribute("contentTypes", {
      slug: type,
      title: type,
      alias: type
    });

    if (!typeMetadata) {
      return createResponse({ error: "Content type not found" }, 404);
    }

    const matchingFiles = getMarkdownFilesByContentType(typeMetadata);
    return new createResponse({meta: typeMetadata, entries: matchingFiles});
  } catch (err) {
    return createResponse({ error: err.message }, 500);
  }
}
