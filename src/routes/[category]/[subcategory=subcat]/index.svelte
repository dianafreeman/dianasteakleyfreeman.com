<script>
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Card from "$lib/components/Card.svelte";

  export let title;
  export let entries;
  export let category;
  export let subcategory;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<div id="spacer" style:height="60px" />
<div class="py-5 px-3 "><Breadcrumbs {category} {subcategory} /></div>

<div class="mx-3 flex flex-col min-h-screen justify-center">
  <div class="my-12 relative p-2 lg:p-5 align-center">
    <h1 class="text-6xl text-center font-bold">{subcategory.name}</h1>
  </div>
  <div class="p-2 lg:p-5 my-5">
    <hr class="m-10" />
    <ul class="grid sm:grid-cols-2 gap-5 md:grid-cols-3 md:max-w-[768px] m-auto">
      {#each entries as [, entry]}
        <li class="max-w-xs m-auto">
          <Card
            title={entry.metadata.title}
            target={entry.metadata.path}
            imageName={entry.metadata.image}
          />
        </li>
      {/each}
    </ul>
  </div>
</div>
