<script>
  import { derived, writable } from "svelte/store";
  import Button from "../Buttons/Button.svelte";
  import CheckboxField from "./CheckboxField.svelte";
  import SelectField from "./SelectField.svelte";
  import ToggleableBadge from "./ToggleableBadge.svelte";

  import createSortAndFilterStore from "$stores/SortAndFilterStore";
  import { createEventDispatcher } from "svelte";

  export let data;

  const {
    options,
    category,
    tags,
    clearFilters
  } = createSortAndFilterStore(data);

  const ALL_CATEGORIES_OPTION = { value: "", label: "All Categories" }
  const pendingCategory = writable({});
  const pendingTags = writable([]);

  const isTagValue = (value) => $tags.map((t) => t.value).includes(value);
  const isCategoryValue = (value) => $category.value === value;

  const isPendingValue = (value) => $pendingTags.map((t) => t.value).includes(value) || $pendingCategory.value === value;

  function onCategoryChange(evt) {
    pendingCategory.set(evt.detail);
  }

  function onCheckboxClick(evt) {
    pendingTags.update((curr) => {
      const currValues = curr.map((v) => v.value);
      const exists = currValues.includes(evt.detail.value);

      if (exists) {
        return curr.filter((v) => v.value !== evt.detail.value);
      }

      const { value, label } = evt.detail;
      return [...curr, { value, label }];
    });
  }

  function removeCategoryOrTag(ev) {
    const { value } = ev.detail;

      if (isCategoryValue(value)) {
        pendingCategory.set(ALL_CATEGORIES_OPTION)
      } else if (isTagValue(value)) {
        pendingTags.update( current => current.filter( t => t.value !== value))
        console.log('$pendingTags',$pendingTags)
      }
  }

  const allFilters = derived([category, tags, pendingCategory, pendingTags], ([$cat, $tags, $pendingCat, $pendingTags]) => {
    const category = $cat.value !== $pendingCat.value ? $cat : null
    const tags = $tags.filter( t => $pendingTags.map( pt => pt.value).filter(ptArray = tArray.includes(t.value)))
    return $cat.value ? [$cat, ...$tags] : $tags
  });

  pendingCategory.subscribe(c => console.log('pendingCategory', c))
  pendingTags.subscribe(c => console.log('pendingTags', c))
  // tags.subscribe(c => console.log('tags', c))
  // category.subscribe(c => console.log('category', c))
  allFilters.subscribe(c => {
    console.log('pendingTags', $pendingTags)
    console.log('allFilters', c)
  })

  const dispatch = createEventDispatcher()
  function submit() {
    category.set($pendingCategory);
    tags.set($pendingTags);
    pendingCategory.set(null)
    pendingTags.set([])
    dispatch('submit', { category: $pendingCategory, tags: $pendingTags })
  }
</script>

<div class="m-5 w-auto">
  <div class="border border-gray p-5 ">
    <div class="">
      <div>
        <label for="category" class="font-bold lowercase"
          >Browse by Category</label>
        <SelectField
          on:change={onCategoryChange}
          id="category"
          options={[
           ALL_CATEGORIES_OPTION,
            ...options.categories
          ]} />
      </div>
      <p class="font-bold lowercase">Filter By Tag</p>
      <div class="flex flex-wrap">
        {#each options.tags as tag}
          <CheckboxField
            class="w-full"
            value={tag.value}
            label={tag.label}
            checked={$pendingTags.map(v => v.value).includes(tag.value)}
            
            on:change={onCheckboxClick} />
        {/each}
      </div>
    </div>
    <div id="active-filters" class="my-5">
      {#each $allFilters as entity}
        {#if entity.value && !isPendingValue(entity.value)}
          <ToggleableBadge
            on:toggleClick={removeCategoryOrTag}
            value={entity.value}
            label={entity.label} />
        {/if}
      {/each}
    </div>
    <div class="flex justify-end gap-3">
      <Button
        on:click={() => submit()}
        class="text-gray-800 w-fit bg-gray px-4 py-2 text-sm font-bold hover:bg-dark-gray">
        apply
      </Button>
      <Button
        on:click={() => clearFilters()}
        class="text-gray-800 w-fit border border-gray px-4 py-2 text-sm font-bold hover:bg-dark-gray">
        reset
      </Button>
    </div>
  </div>
</div>
