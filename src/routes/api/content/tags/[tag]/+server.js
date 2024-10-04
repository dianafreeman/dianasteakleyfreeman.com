import { getMetadataByAttribute, filterMarkdownFilesByMetadataField } from "$lib/markdown/utils";
import { BASE_DIR } from "$lib/markdown/constants";


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
      return new Response(JSON.stringify({ error: "Tag not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Use the helper function to filter markdown files by tags
    const matchingFiles = filterMarkdownFilesByMetadataField(BASE_DIR, "tags", tagMetadata);

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