import { getCategories } from "$lib/queries";

/** @type {import('./$types').LayoutLoad} */
export async function load({ category }) {
  const categories = await getCategories({ category });

  const staticRouteModules = import.meta.glob("$routes/**/metadata.json")
  
  const resolved = await Promise.all(Object.entries(staticRouteModules).map(async ([_path, getter]) => await getter()))
  const staticRoutes = resolved.map( r => r.default)
  return { categories, staticRoutes };
}
