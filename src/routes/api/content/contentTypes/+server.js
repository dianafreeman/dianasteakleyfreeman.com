import { BASE_DIR } from "$lib/markdown/constants";
import { collectContentTypes } from "$lib/markdown/contentTypes";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  try {

    // Collect types (subdirectory names)
    const types = collectContentTypes(BASE_DIR);

    // Return the types as a JSON response
    return new Response(JSON.stringify({ types }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
