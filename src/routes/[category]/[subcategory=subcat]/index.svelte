<script>
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

  export let title;
  export let entries;
  export let category;
  export let subcategory;
  // console.log(entries)
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<div id="spacer" style:height="60px" />
<div class="py-5 px-3 "><Breadcrumbs {category} /></div>

<div class="mx-3 flex flex-col min-h-screen justify-center">
  <div class="my-12 relative p-2 lg:p-5 align-center">
    <h1 class="text-6xl text-center font-bold">SUBCAT: {subcategory}</h1>
  </div>
  <div class="p-2 lg:p-5 my-5">
    <hr class="m-10" />
    <ul class="grid sm:grid-cols-2 gap-5 md:grid-cols-3 md:max-w-[768px] m-auto">
      {#each entries as [path, entry]}
        <li class="max-w-xs m-auto">
          <a href={entry.metadata.path} class="text-md font-bold p-3">
            <img src={`/images/${entry.metadata.image}`} alt="caption descripton" class="w-full" />
            <span class="block my-3">{entry.metadata.title}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
