<script>
  export let data;
  const { entry } = data
  
</script>

<div class="mx-3 flex flex-col min-h-screen justify-center">
  <!-- <div class="flex flex-row relative text-white">
      <p>share icons</p>a
    </div> -->
  <div class="flex flex-col md:justify-center md:align-middle pt-16">
    <h1 class="text-4xl md:text-5xl lg:text-6xl text-center font-bold md:text-left mb-12">
      {entry.metadata.title}
    </h1>
    <img src={entry.metadata.image} alt="caption" class="m-auto w-3/4 mb-12" />

    <div class="w-5/6 mx-auto lg:absolute lg:bottom-14 lg:flex text-left">
      {#if entry.metadata?.date}
      <p class="mr-3 text-md">
        Published on <span class="font-bold">{new Date(entry.metadata?.date).toDateString()}</span>
      </p>
      {/if}
      <!-- <p class="mr-3 text-md">
        Tags:
        {#each entry.metadata?.tags.toString().split(",") as tag}
          <span class="font-bold underline underline-offset-4">{tag}</span>{`, `}
        {/each}
      </p> -->
    </div>
  </div>
  <hr class="w-5/6 lg:w-3/4 mx-auto my-5" />
  <div class="markdown w-5/6 lg:w-3/4 mx-auto">
    <svelte:component this={entry.default} />
  </div>
</div>

<div class="p-6" />
