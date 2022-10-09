<script>
  export let title;
  export let entries;
  // console.log(entries)
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="mx-3 flex flex-col min-h-screen justify-center">
  <div class="my-12 relative p-2 lg:p-5 align-center">
    <h1 class="text-6xl text-center font-bold">{title}</h1>
  </div>

  <div class="p-2 lg:p-5 my-5">
    <!-- <p class="mr-3 text-xl font-thin text-center">
      Software Engineer, Digital Policy Buff, User Rights Enthusiast, Former Scientist, Forever
      Experimenting.
    </p> -->

    <hr class="my-10" />

    <ul>
      {#each entries as [path,entry]}
      <li class="border-l-2 pl-4 py-3 my-2">
        <a href={path} class="text-md font-bold">{entry.metadata.title}</a>
      </li>
      {/each}
    </ul>
  </div>
</div>
