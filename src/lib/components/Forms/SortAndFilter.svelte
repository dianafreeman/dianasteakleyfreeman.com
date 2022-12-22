<script>
  import { derived } from "svelte/store";
  import CheckboxField from "./CheckboxField.svelte";
  import SelectField from "./SelectField.svelte";
  import ToggleableBadge from "./ToggleableBadge.svelte";

  export let store;

  const { options, category, tags } = store;

  const ALL_CATEGORIES_OPTION = { value: "", label: "All Categories" };

  const isTagValue = (value) => $tags.map((t) => t.value).includes(value);
  const isCategoryValue = (value) => $category.value === value;

  function onCategoryChange(evt) {
    category.set(evt.detail);
  }

  function onCheckboxClick(evt) {
    tags.update((curr) => {
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
      category.set(ALL_CATEGORIES_OPTION);
    } else if (isTagValue(value)) {
      tags.update((current) => current.filter((t) => t.value !== value));
    }
  }

  const allFilters = derived([category, tags], ([$cat, $tags]) => {
    return $cat.value ? [$cat, ...$tags] : $tags;
  });
</script>

<div class="m-5 w-auto">
  <div class="border border-gray p-5 ">
    <div class="">
      <div class="">
        <label for="category" class="font-bold lowercase"
          >Browse by Category</label>
        <SelectField
          on:change={onCategoryChange}
          id="category"
          selectedValue={$category.value}
          options={[ALL_CATEGORIES_OPTION, ...options.categories]} />
      </div>
      <div class="mt-5">
        <p class="font-bold lowercase">Filter By Tag</p>
        <div class="flex flex-wrap">
          {#each options.tags as tag}
            <CheckboxField
              class="w-full"
              value={tag.value}
              label={tag.label}
              checked={$tags.map((v) => v.value).includes(tag.value)}
              on:change={onCheckboxClick} />
          {/each}
        </div>
      </div>
    </div>
    <div id="active-filters" class="my-5">
      {#each $allFilters as entity}
        {#if entity.value}
          <ToggleableBadge
            on:toggleClick={removeCategoryOrTag}
            value={entity.value}
            label={entity.label} />
        {/if}
      {/each}
    </div>
  </div>
</div>
