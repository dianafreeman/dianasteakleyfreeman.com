import {
  kebabCaseToTitleCase,
  stripAllButSpacesAndAlphaNumeric
} from "$lib/stringHelpers";
import { derived, writable } from "svelte/store";

export function reduceEntriesTo(key, entries) {
  return Array.from(
    new Set(
      entries.reduce((accum, e) => {
        // console.log(e.metadata)
        if (!Object.keys(e.metadata).includes(key))
          throw new Error(
            `ERROR. Can't reduce with an invalid key. "${key}" not found in the object. `
          );
        const values = e.metadata[key];

        // console.log(Array.isArray(values))
        if (!values) return accum;
        if (Array.isArray(values)) {
          return [...accum, ...values];
        } else {
          return [...accum, values];
        }
      }, [])
    )
  );
}

function hasMatchingTags(entry, allTags){
  const matchedTags = entry.metadata.tags.map(t => allTags.includes(t))
  return matchedTags.length !== 0
}


function createSortAndFilterStore(entryArray) {
  if (!entryArray) return;

  const tagFilters = writable([]);
  const categoryFilter = writable("");


  const tags = reduceEntriesTo("tags", entryArray).map((tag) => ({
    value: stripAllButSpacesAndAlphaNumeric(tag),
    label: tag
  }));

  const categories = reduceEntriesTo("category", entryArray).map(
    (categorySlug) => ({
      value: categorySlug,
      label: kebabCaseToTitleCase(categorySlug).replace("Usa", "USA")
    })
  );

  const filteredItems = derived([tagFilters, categoryFilter], ([$tags, $category]) => {
    if (!$tags.length && !$category) return entryArray
    
    return entryArray.filter(entry => hasMatchingTags(entry, $tags)).filter( entry => $category === entry.metadata.category)
  })

  function toggleFilter(term) {
    tagFilters.update((currentFilters) => {
      // remove the term if it exists
      if (currentFilters.includes(term)) {
        return currentFilters.filter((v) => v !== term);
      } else {
        return [...currentFilters, term];
      }
    });
  }

  function clearFilters() {
    tagFilters.set([]);
    categoryFilter.set("")
  }

  
  return {
    subscribe: filteredItems.subscribe,
    items: filteredItems,
    filters: { categories, tags },
    tagFilters,
    categoryFilter,
    toggleFilter,
    clearFilters
  };
}

export default createSortAndFilterStore;
