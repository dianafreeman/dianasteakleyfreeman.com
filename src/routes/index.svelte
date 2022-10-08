<script context="module">
  export const prerender = true;
  export let pageBody;
</script>

<script>
  import Card from "$lib/components/Card.svelte";

  let scrollY;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="flex flex-col">
  <div class="flex flex-row relative p-5 text-center align-center m-16 mb-4">
    <h1 class="m-auto text-5xl font-bold">Hi. I'm Diana.</h1>
  </div>
  <div class="flex flex-row relative p-5 text-center align-center w-1/2 m-auto ">
    <h3 class="text-gray-400">
      Humane Technologist, Software Engineer, Digital Policy Buff, User Rights Enthusiast.
      Former Scientist, Forever Experimenting.
    </h3>
  </div>
</div>
<div class="flex flex-row justify-center py-32 mx-8">
  <button class="rounded-full p-3 px-6 mx-2 bg-neutral-800">blog</button>
  <button class="rounded-full p-3 px-6 mx-2 bg-neutral-800">projects</button>
  <button class="rounded-full p-3 px-6 mx-2 bg-neutral-800">science</button>
</div>
<div class="flex flex-row justify-center py-32 mx-8">

  <Card />
</div>


