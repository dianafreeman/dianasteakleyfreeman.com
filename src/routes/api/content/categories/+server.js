
import { collectAllCategories } from '$lib/markdown/categories';
import { BASE_DIR } from '$lib/markdown/constants';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  try {
      // Collect the nested category and subcategory structure
      const categories = collectAllCategories(BASE_DIR);

      // Return the category structure as a JSON response
      return new Response(JSON.stringify({categories}), {
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
