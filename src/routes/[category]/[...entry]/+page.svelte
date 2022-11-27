<script>
  export let data;
  const { entry } = data;
</script>

<div class="mb-auto flex min-h-screen flex-col justify-start px-4">
  <div
    class="before:content-[' '] relative flex min-h-[50vh] flex-col justify-center bg-contain bg-center grayscale before:absolute before:top-0 before:-z-0 before:h-full before:w-full before:bg-[rgba(0,0,0,0.5)] lg:min-h-[80vh] lg:bg-right"
    style="background-image: url({entry.metadata.image}); background-repeat: no-repeat;"
  >
    <div class="z-10">
      <h1
        class="mb-12 text-left text-4xl font-bold lowercase md:text-left md:text-5xl lg:w-1/2 lg:text-6xl"
      >
        {entry.metadata.title}.
      </h1>

      {#if entry.metadata?.date}
        <div class="mx-auto flex flex-col text-left md:w-full">
          <p class="text-md mr-3">
            Published on <span class="font-bold"
              >{new Date(entry.metadata?.date).toDateString()}</span
            >
          </p>
        </div>
      {/if}
    </div>
  </div>

  <div class="markdown mx-sauto responsive-container mt-6 w-full">
    <svelte:component this={entry.default} />
  </div>
</div>
