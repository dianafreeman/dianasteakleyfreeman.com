<script>
  import { page } from "$app/stores";
	import ErrorView from "$lib/components/ErrorView.svelte";
</script>

<svelte:head>
  <title>Error {$page.status}</title>
</svelte:head>

<section class="h-full">
  <ErrorView code={$page.status} message={$page.error.message}></ErrorView>
</section>
