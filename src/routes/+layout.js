import { error } from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch, url }) {
  try {

    // const tagRes = await fetch(`/api/v1/content/tag`);
    // const categoryRes = await fetch(`/api/v1/content/category`);
    // const { tags } = await tagRes.json();
    // const { categories } = await categoryRes.json();

      // return { tags, categories };
    } catch (err){
      // throw error(err.code, { message: "Something went wrong"})
    }
}
