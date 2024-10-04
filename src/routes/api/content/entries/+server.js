import { BASE_DIR } from "$lib/markdown/constants";
import { collectAllContentAndMetadata } from "$lib/markdown/entries";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  try {
    const content = collectAllContentAndMetadata(BASE_DIR);

    return new Response(JSON.stringify({ content }), {
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
