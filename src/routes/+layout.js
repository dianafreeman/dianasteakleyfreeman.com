import { getCategories } from "$lib/queries";

/** @type {import('./$types').LayoutLoad} */
export async function load() {

  const metadataModules = import.meta.glob("$routes/**/metadata.json")
  
  const routes = await Promise.all(Object.entries(metadataModules).map(async ([_path, getter]) => await getter()))
  return { routes };

  
}
