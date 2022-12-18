import { writable } from "svelte/store";

export function reduceEntriesTo(key, entries) {
  return Array.from(
    new Set(
      entries.reduce((accum, e) => {
        console.log(e.metadata)
        if (!Object.keys(e.metadata).includes(key))
          throw new Error(
            `ERROR. Can't reduce with an invalid key. "${key}" not found in the object. `
          );
        const values = e.metadata[key];

        if (values) {
          return [...accum, ...values];
        }
      }, [])
    )
  );
}

function createSortAndFilterStore(entryArray) {
  if (!entryArray) return;

  const activeFilters = writable([]);
  const filteredItems = writable([]);

  const tags = reduceEntriesTo("tags", entryArray);

  activeFilters.subscribe(($activeFilters) => {
    if (!$activeFilters.length) return filteredItems.set(entryArray);
    const newItems = entryArray.filter((e) => {
      let entryTags = e.metadata.tags;
      const results = entryTags.map((t) => $activeFilters.includes(t));
      return results.includes(true);
    });
    return filteredItems.set(newItems);
  });

  function toggleFilter(term) {
    activeFilters.update((currentFilters) => {
      // remove the term if it exists
      if (currentFilters.includes(term)) {
        return currentFilters.filter((v) => v !== term);
      } else {
        return [...currentFilters, term];
      }
    });
  }

  function clearFilters(){
    activeFilters.set([])
  }
  return {
    subscribe: activeFilters.subscribe,
    items: filteredItems,
    filters: { tags },
    toggleFilter,
    clearFilters
  };
}

export default createSortAndFilterStore;
