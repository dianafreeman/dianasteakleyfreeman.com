
import { collectAllCategories } from '$lib/markdown/categories';
import { BASE_DIR } from '$lib/markdown/constants';
import { createResponse } from '$lib/response';
export const prerender = true;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  try {
      // Collect the nested category and subcategory structure
      const categories = collectAllCategories(BASE_DIR);
    
      // Return the category structure as a JSON response
      return createResponse({categories})
  } catch (err) {
      return createResponse({ error: err.message }, 500)
  }
}
