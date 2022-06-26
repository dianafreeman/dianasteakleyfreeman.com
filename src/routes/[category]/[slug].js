import { getEntry } from "$content/helpers";

export async function get({ params }) {
  const { category, slug } = params;

  const [contentFilePath, entry] = await getEntry(slug);

  if (entry) {
    return {
      body: {
        entry,
        category,
        slug,
        filePath: contentFilePath
      }
    };
  } else {
    return {
      status: 404
    };
  }
}
