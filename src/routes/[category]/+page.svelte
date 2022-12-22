<script>
  import Card from "$lib/components/Card.svelte";
  import Seo from "$lib/components/Seo.svelte";

  import SortAndFilter from "$lib/components/Forms/SortAndFilter.svelte";
  import createSortAndFilterStore from "$stores/SortAndFilterStore";

  /** @type {import('./$types').PageData} */
  export let data;

  const sortAndFilterStore = createSortAndFilterStore(data.entries);

  const { results } = sortAndFilterStore;
</script>

<Seo title={data.title} />
<SortAndFilter store={sortAndFilterStore} data={data.entries} />
<ol
  class="grid w-full justify-center gap-4 p-3 md:grid-cols-2 lg:grid-cols-3"
  aria-live="polite">
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
