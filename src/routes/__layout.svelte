<script>
	import Navigation from '$lib/navigation/Navigation.svelte';
	import 'normalize.css';
	import '../app.css';
</script>

<main class="bg-black">
	<Navigation />

	<slot />
</main>
