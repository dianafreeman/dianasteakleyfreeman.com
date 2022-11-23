<script>
  import Card from "$lib/components/Card.svelte";
  import Seo from "$lib/components/Seo.svelte";
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<Seo title={data.title} />

<ol class="grid w-full justify-center gap-4 p-3 md:grid-cols-2 lg:grid-cols-3">
  {#each data.entries as entry}
    <li>
      <Card
        title={entry.metadata.title}
        target={entry.metadata.relativePath}
        imgSrc={entry.metadata.image}
      />
    </li>
  {/each}
</ol>
