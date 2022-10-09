<script>
  export let category;
  export let slug;
  export let entry;
  export let component;
  export let image;
</script>

<div class="flex flex-col min-h-screen justify-center">
  <div class="flex flex-col lg:flex-row lg:justify-center lg:align-middle pt-32">
    <div class="mx-3 mt-10 mb-12 relative p-2 lg:p-5 lg:m-auto align-center">
      <h1 class="m-auto text-6xl text-center font-bold lg:text-left">{entry.metadata.title}</h1>
    </div>
    <div class="flex justify-center">
      <div class="m-auto w-3/4 ">
        <img src={image} alt="" />
      </div>
    </div>
  </div>
  <div class="relative lg:p-5 mt-5 font-thin text-center lg:text-left">
    <div class="lg:absolute lg:bottom-14 lg:flex">
      <p class="mr-3 text-xl ">Published on {new Date(entry.metadata.date).toLocaleDateString()}</p>
      <p class="mr-3 text-xl ">Tags: {entry.metadata.tags}</p>
    </div>
  </div>
  <hr class="mx-10 my-5" />
  <div class="markdown m-10 md:w-5/6 lg:w-3/4 mx-auto">
    <svelte:component this={component} />
  </div>
</div>

<div class="p-6" />
