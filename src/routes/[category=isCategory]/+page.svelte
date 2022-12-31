<script>
  import Card from "$lib/components/Card.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import createSortAndFilterStore from "$stores/SortAndFilterStore";
  import ToggleableBadge from "$lib/components/ToggleableBadge.svelte";
  import SelectField from "$lib/components/FormFields/types/SelectField.svelte";
  import BackButton from "$lib/components/BackButton.svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  const sortAndFilterStore = createSortAndFilterStore(data.entries);

  const { results, allFilters, options, category } = sortAndFilterStore;
</script>

<Seo title={data.title} />
<div
  class="mx-2 flex w-auto flex-row after:{$allFilters.length > 0
    ? 'items-top'
    : 'items-center'} justify-between">
  <BackButton />
  <div class="m-2 flex w-full flex-col">
    <label
      class="text-md text-gray-700 mb-2 block font-bold lowercase tracking-wide"
      for="browse-by-category">
      Browse by Category.
    </label>

    <SelectField
      on:change={(d) => category.set(d.detail)}
      value={$category.value || ""}
      id="browse-by-category"
      options={options.categories}
      selected={options} />

    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <h2 id="content-start" class="sr-only" tabindex={0}>Results</h2>

    {#if $allFilters.length}
      <div id="active-filters" class="my-2 py-4">
        {#each $allFilters as entity}
          {#if entity.value}
            <ToggleableBadge
              on:badgeButtonClick={() => category.set({})}
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
