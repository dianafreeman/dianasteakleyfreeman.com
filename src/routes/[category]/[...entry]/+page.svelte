<script>
  export let data;
  const { entry } = data;
</script>

<div id="spacer" class="h-[50px]" />
<div class="flex flex-col min-h-screen justify-center m-auto ">
  <div class="relative flex flex-col md:justify-center md:align-middle md:flex-row">
    <h1 class="text-4xl md:text-5xl lg:text-6xl text-center font-bold md:text-left mb-12">
      {entry.metadata.title}
    </h1>
    <img src={entry.metadata.image} alt="caption" class="m-auto w-3/4 mb-12 md:w-1/2 lg:pl-10" />
  </div>

  {#if entry.metadata?.date}
    <div data-scrolltarget class="mx-auto md:w-full flex flex-col text-left">
        <p class="mr-3 text-md">
          Published on <span class="font-bold">{new Date(entry.metadata?.date).toDateString()}</span>
        </p>

    </div>
  {/if}

  <hr class=" w-full mx-auto my-5" />
  <div class="markdown w-full mx-auto">
    <svelte:component this={entry.default} />
  </div>
</div>

<div class="p-6" />
