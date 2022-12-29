<script>
  import Card from "$lib/components/Card.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import SortAndFilter from "$lib/components/Forms/SortAndFilterForm.svelte";
  import createSortAndFilterStore from "$stores/SortAndFilterStore";
  import Modal from "$lib/components/Modal/Modal.svelte";
  import ToggleableBadge from "$lib/components/ToggleableBadge.svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  const sortAndFilterStore = createSortAndFilterStore(data.entries);

  const { results, allFilters, removeCategoryOrTag, options } =
    sortAndFilterStore;

  $: resultsString = `Showing ${$results.length} result${
    $results.length > 1 ? "s" : ""
  }`;
</script>

<Seo title={data.title} />
<div
  class="mx-2 flex w-auto flex-row-reverse {$allFilters.length > 0
    ? 'items-top'
    : 'items-center'} justify-between">
  <div class="mb-auto">
    <Modal
      buttonText="Filter"
      buttonClasses="my-2 p-2 flex items-center"
      buttonIconClasses="text-2xl las la-filter"
      title="Filter Results"
      description={resultsString}>
      <SortAndFilter store={sortAndFilterStore} data={data.entries} />
    </Modal>
  </div>
  <div class="m-2 flex w-full flex-col">
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <h2
      id="results content-start"
      class="flex-grow p-2 lowercase"
      tabindex={0}
      aria-live="polite">
      Showing {$results.length} result{$results.length > 1 ? "s" : ""}.
    </h2>

    {#if $allFilters.length}
      <div id="active-filters" class="my-2">
        {#each $allFilters as entity}
          {#if entity.value}
            <ToggleableBadge
              on:badgeButtonClick={removeCategoryOrTag}
              value={entity.value}
              label={entity.label} />
          {/if}
        {/each}
      </div>
    {/if}
  </div>
</div>

<ol class="grid w-full justify-center gap-4 p-3 md:grid-cols-2 lg:grid-cols-3">
  {#each $results as entry}
    {#key entry.metadata.slug}
      <li>
        <Card
          title={entry.metadata.title}
          target={entry.metadata.relativePath}
          imgSrc={entry.metadata.image} />
      </li>
    {/key}
  {/each}
</ol>
