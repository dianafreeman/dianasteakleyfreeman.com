import { marked } from "marked";
import { findMarkdownFile, readMarkdownFile } from "$lib/markdown/utils";
import { createResponse } from "$lib/response";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
  const { slug } = params;

  try {
    // Find the Markdown file in the folder structure
    const filePath = findMarkdownFile(slug);
    if (!filePath) {
      return createResponse({ error: `Not Found` }, 404);
    }

    // Read the Markdown file
    const { content, metadata} = readMarkdownFile(filePath)

    // Parse the Markdown content to HTML
    const html = marked(content);
    const response = { metadata, html };

    // Return the response as a JSON string with the appropriate headers
    return createResponse(response);
  } catch (err) {
    return createResponse({ error: err.message }, 500);
  }
}