<script context="module">
  export const prerender = true;
</script>

<script>
  import Landing from "$lib/components/Landing.svelte";
  import SlidesStore from "$stores/SlidesStore";

  let slides, activeIndex;

  SlidesStore.subscribe((data) => {
    slides = data.slides;
    activeIndex = data.activeIndex;
  });
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>
<Landing
  title={slides[activeIndex].title}
  index={activeIndex}
  description={slides[activeIndex].description}
/>
<div class="flex flex-row justify-between align-middle w-full">
  <button class="p-4 m-2" on:click={SlidesStore.previous}>previous</button>
  <button class="p-4 m-2" on:click={SlidesStore.next}>next</button>
</div>