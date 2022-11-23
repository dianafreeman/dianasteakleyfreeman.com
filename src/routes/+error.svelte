<script>
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>Error {$page.status}</title>
</svelte:head>

<div class="mx-3 flex min-h-screen flex-col justify-end">
  <div class="align-center relative my-12 p-2 lg:p-5">
    <div class="my-5 p-2 lg:p-5">
      <p class="mr-3 text-xl">Error {$page.status}: {$page.error.message}.</p>
    </div>
    <p class="text-6xl font-thin">
      what a <span class="font-bold">bummer.</span>
    </p>
  </div>
</div>
