<script>
  import CheckboxField from "$lib/components/FormFields/types/CheckboxField.svelte";
  import FormField from "../FormFields/FormField.svelte";

  export let store;

  const { options, category, tags } = store;

  function onCategoryChange(evt) {
    // console.log(evt.detail.value)
    category.set(evt.detail);
  }

  function onCheckboxClick(evt, value) {
    // console.log('evt.detail',evt.detail)
    // console.log('value',value)
    tags.update((curr) => {
      const currValues = curr.map((v) => v.value);
      console.log(currValues);
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
        options={options.categories} />
    </div>
    <div class="mt-5">
      <p class="font-bold lowercase">Filter By Tag</p>
      <div class="flex flex-wrap gap-4 ">
        {#each options.tags as tag}
          <CheckboxField
            value={tag.value}
            label={tag.label}
            on:click={onCheckboxClick} />
        {/each}
      </div>
    </div>
  </div>
</div>
