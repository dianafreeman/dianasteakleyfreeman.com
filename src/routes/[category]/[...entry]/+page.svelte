<script>
  export let data;
  const { entry } = data;
</script>

<div class="mb-auto flex min-h-screen flex-col justify-start px-4">
  <div class="lg:min-h-[80vh] relative flex flex-col md:flex-row md:justify-center md:align-middle" style="background-image: url({entry.metadata.image}); backgrond-">
    <h1 class="mb-12 text-center text-4xl font-bold lowercase md:text-left md:text-5xl lg:text-6xl">
      {entry.metadata.title}.
    </h1>
  </div>

  {#if entry.metadata?.date}
    <div class="mx-auto flex flex-col text-left md:w-full">
      <p class="text-md mr-3">
        Published on <span class="font-bold">{new Date(entry.metadata?.date).toDateString()}</span>
      </p>
    </div>
  {/if}

  <div class="markdown mx-sauto w-full ">
    <svelte:component this={entry.default} />
  </div>
</div>

<div class="p-6" />
