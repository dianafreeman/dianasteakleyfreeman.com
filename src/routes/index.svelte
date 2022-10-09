<script context="module">
  import layoutStore from "$stores/LayoutStore";
  export const prerender = true;
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

    <div class="text-md flex justify-evenly w-full">
      {#each layoutStore.validCategories as category}
        <a
          href="/{category}"
          class="outline-0 underline underline-offset-4 text-neutral-300 hover:text-white hover:bg-black focus:text-white focus:bg-black active:text-white active:bg-black focus:outline-white py-3 px-6"
          >{category}</a
        >
      {/each}
    </div>
  </div>
</div>
