<script>
  import Button from "$lib/components/Button.svelte";
  export let data;
  const { categories } = data;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="mx-3 flex flex-col min-h-screen justify-end">
  <div class="my-12 relative p-2 lg:p-5 align-center">
    <h1 class="text-6xl font-thin">
      the future of engineering is <span class="font-bold">human.</span>
    </h1>
  </div>
</div>
<div class="mx-3 flex flex-col min-h-screen justify-center">
  <div class="my-12 relative p-2 lg:p-5 align-center">
    <h1 class="text-6xl text-center font-bold">I'm Diana.</h1>
  </div>

  <div class="p-2 lg:p-5 my-5">
    <p class="mr-3 text-xl font-thin text-center">
      Software Engineer, Digital Policy Buff, User Rights Enthusiast, Former Scientist, Forever
      Experimenting.
    </p>

    <hr class="my-10" />

    <div class="text-md flex justify-evenly w-full ">
      <div class="text-center">
        <h2 class="font-bold text-xl">Exciting Updates Ahead!</h2>
        <p class="text-italic text-neutral-300">There is more to this site coming soon.</p>
      </div>
      <!-- {#each categories as category}
        <Button href="/{category}">{category}</Button>
      {/each} -->
    </div>
  </div>
</div>
