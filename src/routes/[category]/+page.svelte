<script>
  import { invalidate } from "$app/navigation";
  import Card from "$lib/components/Card.svelte";
  import Seo from "$lib/components/Seo.svelte";
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<Seo title={data.title} />

<div class="mx-3 flex flex-col">
  <div class="my-5">
    <ol class="grid sm:grid-cols-2 gap-4 md:grid-cols-3 md:max-w-3xl lg:max-w-4xl m-auto">
      {#each data.entries as entry}
        <li class="max-w-xs">
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
