<script>
  import { writable } from "svelte/store";
  import Button from "../Buttons/Button.svelte";
  import FilterButton from "../Buttons/FilterButton.svelte";

  export let store;

  const { filters, categoryFilter, tagFilters, clearFilters } = store;
  let pendingCategory = writable({});
  let pendingTags = writable({});

  function handleCategoryClick(evt) {
    console.log(evt.detail.values)
    
    if (evt.detail.value !== $categoryFilter) {
      console.log(evt.detail.value)
      pendingCategory.set(evt.detail.value)

    }
}

  categoryFilter.subscribe((val) => console.log("categoryValue", val));

  function submit() {
    categoryFilter.set($pendingCategory || "");
    tagFilters.set($pendingTags || []);
    pendingCategory.set();
  }

  $: categories = [
    { value: "", label: "All Categories" },
    ...filters.categories
  ];

</script>

<div class="m-5 w-auto">
  <div class="border border-white p-5 ">
    <div class="mt-4 grid grid-cols-2 gap-4 ">
      <div>
        <p class="font-bold lowercase">Select a Category</p>
        {#each categories as cat}
          <!-- {#key cat.value} -->
            <FilterButton
              isPending={cat.value === $pendingCategory}
              isActive={cat.value === $categoryFilter}
              on:click={handleCategoryClick}
              name="categoryFilter"
              value={cat.value}
              label={cat.label} />
              <!-- {/key} -->
          
        {/each}
      </div>
      <div>
        <p class="font-bold lowercase">Filter By Tag</p>
        <div class="flex flex-wrap">
          {#each filters.tags as tag}
           <Button
              animateBorders={false}
              iconClass="mx-5"
              class="m-1 h-fit w-fit  p-5">
              
              {tag.label}</Button> 
          {/each}
        </div>
      </div>
    </div>
    <div class="flex justify-end gap-3">
      <Button
        on:click={() => submit()}
        class="text-gray-800 w-fit rounded-md bg-gray px-4 py-2 text-sm font-bold hover:bg-dark-gray">
        apply
      </Button>
      <Button 
      on:click={() => clearFilters()}
        class="text-gray-800 w-fit rounded-md border border-gray px-4 py-2 text-sm font-bold hover:bg-dark-gray">
        reset
      </Button>
    </div>
  </div>
</div>
