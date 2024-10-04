import { getMetadataByAttribute, filterMarkdownFilesByContentType } from "$lib/markdown/utils";

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
      alias: type,
    });

    if (!typeMetadata) {
      return new Response(JSON.stringify({ error: "Content type not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const matchingFiles = filterMarkdownFilesByContentType(typeMetadata)
  

    return new Response(JSON.stringify(matchingFiles), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}