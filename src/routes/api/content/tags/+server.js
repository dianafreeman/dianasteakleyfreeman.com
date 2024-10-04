
import { collectAllTags  } from '$lib/markdown/tags';
import { BASE_DIR  } from '$lib/markdown/constants';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {

    try {
        // Collect all tags from markdown files
        const tags = collectAllTags(BASE_DIR);

        // Return the unique tags as a JSON response
        return new Response(JSON.stringify({ tags }), {
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
