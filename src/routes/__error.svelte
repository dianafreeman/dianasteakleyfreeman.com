<script>
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>Error {$page.status}</title>
</svelte:head>

<div class="mx-3 flex flex-col min-h-screen justify-end">
  <div class="my-12 relative p-2 lg:p-5 align-center">
      <div class="p-2 lg:p-5 my-5">
        <p class="mr-3 text-xl">Error {$page.status}: {$page.error.message}.</p>
      </div>
    <p class="text-6xl font-thin">
      what a <span class="font-bold">bummer.</span>
    </p>
  </div>

</div>
