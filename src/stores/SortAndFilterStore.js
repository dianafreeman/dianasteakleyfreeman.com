import {
  kebabCaseToTitleCase,
  stripAllButSpacesAndAlphaNumeric
} from "$lib/stringHelpers";
import { derived, writable } from "svelte/store";

export const ALL_CATEGORIES_OPTION = { value: "", label: "All Categories" };

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

  const allTagValues = allTags.map((v) => v.value);

  const allCategories = [
    ALL_CATEGORIES_OPTION,
    ...reduceEntriesTo("category", entryArray).map((categorySlug) => ({
      value: categorySlug,
      label: kebabCaseToTitleCase(categorySlug)
    }))
  ];

  const allCategoryValues = allCategories.map((v) => v.value);

  function entryMatchesTags(entry, tagsObject) {
    const matchedTags = entry.metadata.tags.filter((t) =>
      tagsObject.map((v) => v.label).includes(t)
    );
    return matchedTags.length !== 0;
  }

  function entryMatchesCategory(entry, categoryObject) {
    if (!categoryObject || categoryObject.value === "") return true;
    const categoryRegex = new RegExp(categoryObject.value, "i");
    return entry.metadata.category.match(categoryRegex);
  }

  const filteredItems = derived([tags, category], ([$tags, $category]) => {
    if (!$tags.length && !$category.value) return entryArray;

    return entryArray
      .filter((e) =>
        $category.value ? entryMatchesCategory(e, $category) : true
      )
      .filter((e) => ($tags.length ? entryMatchesTags(e, $tags) : true));
  });

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

  const allFilters = derived([category, tags], ([$cat, $tags]) => {
    return $cat.value ? [$cat, ...$tags] : $tags;
  });

  function clearFilters() {
    tags.set([]);
    category.set();
  }

  const isTagValue = (value) => allTagValues.includes(value);
  const isCategoryValue = (value) => allCategoryValues.includes(value);

  function removeCategoryOrTag(ev) {
    const filterToRemove = ev.detail;
    if (isCategoryValue(filterToRemove.value)) {
      category.set(allCategories[0]);
    } else if (isTagValue(filterToRemove.value)) {
      tags.update((current) =>
        current.filter((t) => t.value !== filterToRemove.value)
      );
    }
  }

  return {
    subscribe: filteredItems.subscribe,
    results: filteredItems,
    options: { categories: allCategories, tags: allTags },
    tags,
    category,
    allFilters,
    removeCategoryOrTag,
    toggleFilter,
    clearFilters
  };
}

export default createSortAndFilterStore;
