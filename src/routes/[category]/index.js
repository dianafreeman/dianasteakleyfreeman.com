import { getEntries } from "$content/helpers";

export async function get({ params }) {
  const { category } = params;

  const entries = await getEntries(category);

  if (entries) {
    return {
      body: {
        title: category,
        entries
      }
    };
  } else {
    return {
      status: 404
    };
  }
}
