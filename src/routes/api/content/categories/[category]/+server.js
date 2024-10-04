import { getMetadataByAttribute, filterMarkdownFilesByMetadataField } from "$lib/markdown/utils";
import { BASE_DIR } from "$lib/markdown/constants";
/**
 * GET /content/categories/[category]
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
      return new Response(JSON.stringify({ error: "Category not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Use the helper function to filter markdown files by category
    const matchingFiles = filterMarkdownFilesByMetadataField(BASE_DIR, "category", categoryMetadata);

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
