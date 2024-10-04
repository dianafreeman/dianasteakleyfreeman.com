import { marked } from "marked";
import matter from "gray-matter";
import { findMarkdownFile, readMarkdownFile } from "$lib/markdown/utils";

function createResponse(obj, status) {
    return new Response(JSON.stringify(obj), {
      status,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }


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
