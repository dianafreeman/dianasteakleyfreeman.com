import { error } from "@sveltejs/kit";
import { markdownPathToRelativePath } from "$lib/helpers.js";

export async function load({ params }) {
  const { category, slug: slugWithSlash } = params;
  const slug = (slugWithSlash.charAt(0) === "/" || slugWithSlash.charAt(slugWithSlash.length - 1) === "/") ? slugWithSlash.replaceAll("/", "") : slugWithSlash
  const modules = import.meta.glob("$routes/**/*.md");
  const entry = Object.entries(modules).find(
    ([key, value]) => key.includes(slug) && key.includes(category)

  );

  if (entry) {
    const [markdownPath, create] = entry;
    const relativePath = markdownPathToRelativePath(markdownPath);
    const renderableEntry = await create();

    return {
      component: renderableEntry.default,
      ...renderableEntry.metadata,
      slug,
      path: relativePath
    };
  } else {
    throw error(404, "Not Found");
  }
}
