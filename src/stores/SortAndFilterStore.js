import {
  kebabCaseToTitleCase,
  stripAllButSpacesAndAlphaNumeric
} from "$lib/stringHelpers";
import { derived, writable } from "svelte/store";

export function reduceEntriesTo(key, entries) {
  return Array.from(
    new Set(
      entries.reduce((accum, e) => {
        const values = e.metadata[key];
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

function createSortAndFilterStore(entryArray) {
  if (!entryArray) return;

  const tags = writable([]);
  const category = writable({});

  const allTags = reduceEntriesTo("tags", entryArray).map((tag) => ({
    value: stripAllButSpacesAndAlphaNumeric(tag),
    label: tag
  }));

  const allCategories = reduceEntriesTo("category", entryArray).map(
    (categorySlug) => ({
      value: categorySlug,
      label: kebabCaseToTitleCase(categorySlug)
    })
  );

  function entryMatchesTags(entry, tagsObject) {
    const matchedTags = entry.metadata.tags.filter((t) => tagsObject.map(v => v.label).includes(t));
    return matchedTags.length !== 0;
  }
  
  function entryMatchesCategory(entry, categoryObject){
    if (!categoryObject || categoryObject.value === "") return true 
    const categoryRegex =  new RegExp(categoryObject.value, "i")
    return entry.metadata.category.match(categoryRegex)
  }
  
  const filteredItems = derived(
    [tags, category],
    ([$tags, $category]) => {
      if (!$tags.length && !$category.value) return entryArray;

      return entryArray.filter( e => $category.value ? entryMatchesCategory(e, $category) : true).filter(e => $tags.length ? entryMatchesTags(e, $tags) : true)
       
    }
  );

  filteredItems.subscribe(v => console.log("filteredItems", v))

  function toggleFilter(term) {
    tags.update((currentFilters) => {
      // remove the term if it exists
      if (currentFilters.includes(term)) {
        return currentFilters.filter((v) => v !== term);
      } else {
        return [...currentFilters, term];
      }
    });
  }

  function clearFilters() {
    tags.set([]);
    category.set();
  }

  return {
    subscribe: filteredItems.subscribe,
    results: filteredItems,
    options: { categories: allCategories, tags:allTags },
    tags,
    category,
    toggleFilter,
    clearFilters
  };
}

export default createSortAndFilterStore;
