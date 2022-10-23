<script>
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

  export let data;
  const { entry, post, category, image} = data;


</script>

<div id="spacer" style:height="60px" />
<div class="py-5 px-3 "><Breadcrumbs {category} active={post} /></div>
<div class="mx-3 flex flex-col min-h-screen justify-center">
  <!-- <div class="flex flex-row relative text-white">
      <p>share icons</p>
    </div> -->
  <div class="flex flex-col md:flex-row md:justify-center md:align-middle pt-16">
    <h1 class="text-4xl md:text-5xl lg:text-6xl text-center font-bold md:text-left mb-12">
      {entry.title}
    </h1>
    <img src={image} alt="caption" class="m-auto w-3/4 mb-12" />

    <div class="w-5/6 mx-auto lg:absolute lg:bottom-14 lg:flex text-left">
      <p class="mr-3 text-md">
        Published on <span class="font-bold">{new Date(entry.date).toDateString()}</span>
      </p>
      <p class="mr-3 text-md">
        Tags:
       {#each entry.tags.toString().split(",") as tag}
          <span class="font-bold underline underline-offset-4">{tag}</span>{`, `}
        {/each}
      </p>
    </div>
  </div>
  <hr class="w-5/6 lg:w-3/4 mx-auto my-5" />
  <div class="markdown w-5/6 lg:w-3/4 mx-auto">
    <svelte:component this={entry.component.default} />
  </div>
</div>

<div class="p-6" />
