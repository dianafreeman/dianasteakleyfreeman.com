<script>
  import { ALL_CATEGORIES_OPTION } from "$stores/SortAndFilterStore";
  import CheckboxField from "$lib/components/FormFields/types/CheckboxField.svelte";
  import SelectField from "$lib/components/FormFields/types/SelectField.svelte";
  import FormField from "../FormFields/FormField.svelte";

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
      <FormField
        fieldType="select"
        on:change={onCategoryChange}
        id="category"
        label="Browse By Category"
        selectedValue={$category.value}
        options={[ALL_CATEGORIES_OPTION, ...options.categories]} />
    </div>
    <div class="mt-5">
      <p class="font-bold lowercase">Filter By Tag</p>
      <div class="flex flex-wrap gap-4 ">
        {#each options.tags as tag}
          <FormField
            fieldType="checkbox"
            class="flex items-center border p-3 "
            value={tag.value}
            label={tag.label}
            hideLabel
            checked={$tags.map((v) => v.value).includes(tag.value)}
            on:change={onCheckboxClick} />
        {/each}
      </div>
    </div>
  </div>
</div>
