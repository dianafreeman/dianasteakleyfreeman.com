<script>
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Button from "$lib/components/Button.svelte";
  import Card from "$lib/components/Card.svelte";
  import FilterButton from "$lib/components/FilterButton.svelte";
  import { derived, writable } from "svelte/store";

  export let title;
  export let entries;
  export let category;

  const { subcategories } = category;
  const filterOptions = subcategories;
  const activeFilters = writable(filterOptions ? filterOptions.map((f) => f.name) : []);

  function toggleFilter(evt) {
    const { term } = evt.detail;
    if ($activeFilters.includes(term)) {
      return activeFilters.update((curr) => curr.filter((f) => f !== term));
    }
    return activeFilters.update((curr) => [...curr, term]);
  }

  const filteredEntries = derived(activeFilters, ($activeFilters) =>
    entries.filter(([path, entry]) => {
      return $activeFilters.length ? $activeFilters.includes(entry.metadata.subcategory) : true;
    })
  );
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<div id="spacer" style:height="60px" />
<div class="py-5 px-3 "><Breadcrumbs active={category.name} /></div>

<div class="mx-3 flex flex-col min-h-screen justify-center">
  <div class="my-12 relative p-2 lg:p-5 align-center">
    <h1 class="text-6xl text-center font-bold">{title}</h1>
  </div>
  <div class="p-2 lg:p-5 my-5">
    {#if category.subcategories}
      <p id="filter" class="font-bold">filter by subcategory:</p>
      <ul aria-describedby="filter" role="menu" class="flex flex-col wrap mx-auto">
        {#each filterOptions as subcat}
          <FilterButton
            on:click={(event) => toggleFilter(event)}
            label={subcat.name}
            isActive={$activeFilters.includes(subcat.name)}
          />
        {/each}
      </ul>
    {/if}
    <p class="italic mt-5 text-center">
      showing {$filteredEntries.length} entr{$filteredEntries.length === 1 ? "y" : "ies"}
    </p>
    <hr class="m-5" />
    {#if entries.length}
      <h2 class="font-bold text-3xl text-center">Results</h2>
      <ol class="grid sm:grid-cols-2 gap-5 md:grid-cols-3 md:max-w-[768px] m-auto">
        {#each $filteredEntries as [_, entry]}
          <li class="max-w-xs m-auto">
            <Card
              title={entry.metadata.title}
              target={entry.metadata.path}
              imageName={entry.metadata.image}
            />
          </li>
        {/each}
      </ol>
    {:else}
      <p class="font-bold text-3xl text-center">Nothing found.</p>
    {/if}
  </div>
</div>
