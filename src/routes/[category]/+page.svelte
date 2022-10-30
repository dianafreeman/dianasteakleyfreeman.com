<script>
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Button from "$lib/components/Button.svelte";
  import Card from "$lib/components/Card.svelte";
  import FilterButton from "$lib/components/Toggles/FilterButton.svelte";
  import { derived, writable } from "svelte/store";

  /** @type {import('./$types').PageData} */
  export let data;

  const { title, entries } = data;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
{#key title}
  <div class="mx-3 flex flex-col ">
    <div class="p-2 lg:p-5 my-5">
      {#if entries?.length}
        <ol class="grid sm:grid-cols-2 gap md:grid-cols-3 md:max-w-3xl lg:max-w-4xl  m-auto">
          {#each entries as entry}
            <li class="max-w-xs mx-auto mb-auto">
              <Card
                title={entry.metadata.title}
                target={entry.relativePath}
                imgSrc={entry.metadata.image}
              />
            </li>
          {/each}
        </ol>
      {:else}
        <p class="font-bold text-3xl text-center">Nothing found.</p>
      {/if}
    </div>
  </div>
{/key}
