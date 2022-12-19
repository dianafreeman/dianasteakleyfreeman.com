<script>
  import FilterButton from "$lib/components/Buttons/FilterButton.svelte";

  export let store;

  let activeFilters;
  store.subscribe((active) => (activeFilters = active));
</script>

<div class="flex justify-between w-full">
  <div class="w-full">
    <p>Filter By</p>
    <ul aria-describedby="filter" role="menu" class="flex flex-wrap mx-auto justify-center">
      <FilterButton
        on:click={() => store.clearFilters()}
        label={"All Topics"}
        isActive={activeFilters.length === 0}
      />
      {#each store.filters.tags as tag}
        <FilterButton
          on:click={(event) => store.toggleFilter(event.detail.term)}
          label={tag}
          isActive={activeFilters.includes(tag)}
        />
      {/each}
    </ul>
  </div>
</div>
<div>
</div>
