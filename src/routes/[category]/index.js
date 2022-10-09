import { getEntries } from "$content/helpers";

export async function get({ params }) {
  const { category } = params;

  const entries = await getEntries(category);
  const hasEntries = !!entries && Object.keys(entries).length;

  // console.log(entries)
  if (hasEntries) {
    return {
      body: {
        title: category,
        entries: entries
      }
    };
  } else {
    return {
      status: 404
    };
  }
}
