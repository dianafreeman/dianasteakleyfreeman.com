<script>
  import Card from "$lib/components/Card.svelte";
  import Seo from "$lib/components/Seo.svelte";
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<Seo title={data.title} />
<div class="mx-3 flex flex-col ">
  <div class="my-5 p-2 lg:p-5">
    <ol class="gap m-auto grid sm:grid-cols-2 md:max-w-3xl md:grid-cols-3 lg:max-w-4xl">
      {#each data.entries as entry}
        <li class="mx-auto mb-auto max-w-xs">
          <Card
            title={entry.metadata.title}
            target={entry.metadata.relativePath}
            imgSrc={entry.metadata.image}
          />
        </li>
      {/each}
    </ol>
  </div>
</div>
