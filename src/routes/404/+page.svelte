<script>
	import ErrorView from "$lib/components/ErrorView.svelte";
</script>

<svelte:head>
  <title>Error 404</title>
</svelte:head>

<section class="h-full">
  <ErrorView code={404} message="Page not found."/>
</section>
