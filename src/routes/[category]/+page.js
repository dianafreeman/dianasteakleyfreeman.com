import { flattenModuleData } from "$lib/queries";

export const SSR = true

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

  const { category } = params;

  const modules = import.meta.glob("$routes/**/*.md")
  const moduleEntries = Object.entries(modules)

  const promises = await moduleEntries.filter(([markdownPath, getter]) => markdownPath.includes(category)).map(async ([markdownPath, getter]) => [markdownPath, await getter()])
  const resolved = await Promise.all(promises)

  const entries = resolved.map(d => flattenModuleData(d))

  return {
    title: 'blog',
    entries,
    category: { name: 'blog' }

  };
}
