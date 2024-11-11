import { marked } from "marked";
import { findMarkdownFile, findMarkdownFileBy, getFrontmatterMeta, readMarkdownFile } from "$lib/markdown/utils";
import { createResponse } from "$lib/response";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
  const { slug } = params;

  try { 
    const filePath = findMarkdownFileBy('slug', slug);
    if (!filePath) {
      return createResponse({ error: `Not Found` }, 404);
    }

    // Read the Markdown file
    const { content, metadata} = readMarkdownFile(filePath)

    // Parse the Markdown content to HTML
    const html = marked(content);

    const response = { metadata: getFrontmatterMeta(metadata), html };

    // Return the response as a JSON string with the appropriate headers
    return createResponse(response);
  } catch (err) {
    return createResponse({ error: err.message }, 500);
  }
}
