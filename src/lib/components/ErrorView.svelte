<script>
	export let code;
	export let message;
</script>

<div class="align-center relative my-12 lg:max-w-3xl lg:p-5">
	<p class="text-6xl font-thin">
		what a <span class="font-bold">bummer.</span>
	</p>
	<p class="mr-3 text-2xl font-thin">error {code}.</p>
	{message}
</div>
