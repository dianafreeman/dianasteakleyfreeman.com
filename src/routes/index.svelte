<script context="module">
  export const prerender = true;
</script>

<script>
	  let slides = [
    {
      title: "Coder",
	  color: "red",
      description: "(v.) To dances between the lines of art, science, and opinion."
    },
    {
      title: "Creator",
	  color: "blue",
      description: "Something creative"
    },
    {
      title: "Communicator",
	  color: "yellow",
      description: "Lorem upsum even better"
    }
  ];
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class=" text-white">
	{#each slides as slide}
		<h1>{slide.title}</h1>
		<p>{slide.description}</p>
	{/each}
</div>