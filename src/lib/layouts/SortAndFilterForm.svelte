<script>
  import { ALL_CATEGORIES_OPTION } from "$stores/SortAndFilterStore";
  import CheckboxField from "../components/FormFields/CheckboxField.svelte";
  import SelectField from "../components/FormFields/SelectField.svelte";

  export let store;

  const { options, category, tags } = store;

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
</script>

<div class="m-2 w-auto p-3">
  <div>
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
</div>
