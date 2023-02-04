import { getMarkdownEntries } from "$lib/content/queries";
import { error } from "@sveltejs/kit";
import { reduceEntriesTo } from "$stores/SortAndFilterStore";

import data from "./data.json"
import { stripAllButSpacesAndAlphaNumeric } from "$lib/stringHelpers";


export async function load({ params }) {
  const category = "resources"
  // const entries = await getMarkdownEntries(category);

  // if (entries && entries.length) {
    const tags  = data.map( d => d.tags).flat().map(t => ({
      value: stripAllButSpacesAndAlphaNumeric(t),
      label: t
    }))


    
    return {
      entries: data,
      title: category,
      filters: { tags }
    };
  // } 
}
