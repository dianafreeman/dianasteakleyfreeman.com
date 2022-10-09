import { getEntry } from "$content/helpers";

export async function get({ params }) {
  const { category, slug } = params;

  const data = await getEntry(category, slug);

  if (data) {
    const [, entry ] = data
    const image = `/images/${entry.metadata.image}`
    return {
      body: {
        entry,
        category,
        slug,
        image,
      }
    };
  } else {
    return {
      status: 404
    };
  }
}
