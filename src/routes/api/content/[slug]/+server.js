import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";

function createResponse(obj, status) {
    return new Response(JSON.stringify(obj), {
      status,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  
/**
 * Recursively search for a markdown file matching the slug in a given directory.
 * @param {string} dir The directory to search in.
 * @param {string} slug The slug to find.
 * @returns {string | null} The path to the file if found, null otherwise.
 */
function findMarkdownFile(dir, slug) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively search the subdirectory
      const result = findMarkdownFile(filePath, slug);
      if (result) {
        return result;
      }
    } else if (stat.isFile() && file === `${slug}.md`) {
      // If it's a file and matches the slug
      return filePath;
    }
  }

  return null;
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {
  const { slug } = params;
  const baseDir = path.join("markdown"); // Base directory for Markdown content

  try {
    // Find the Markdown file in the folder structure
    const filePath = findMarkdownFile(baseDir, slug);
    if (!filePath) {
      return createResponse({ error: `Not Found` }, 404);
    }

    // Read the Markdown file
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Use gray-matter to parse the front matter and the content
    const { content, data: metadata } = matter(fileContent);

    // Parse the Markdown content to HTML
    const html = marked(content);
    const response = { metadata, html };

    // Return the response as a JSON string with the appropriate headers
    return createResponse(response);
  } catch (err) {
    return createReponse({ error: err.message }, 500);
  }
}
