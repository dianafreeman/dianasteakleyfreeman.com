<script>
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>Error {$page.status}</title>
</svelte:head>

<section class="h-full">
  <div class="align-center relative my-12 lg:max-w-3xl lg:p-5">
    <p class="text-6xl font-thin">
      what a <span class="font-bold">bummer.</span>
    </p>
    <p class="mr-3 text-2xl font-thin">error {$page.status}.</p>
  </div>
</section>