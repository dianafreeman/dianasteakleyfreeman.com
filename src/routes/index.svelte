<script context="module">
  export const prerender = true;
</script>

<script>
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

<div class="flex flex-col text-white justify-between px-5">
  <div class="flex flex-row justify-between align-middle h-full">
    <div class="flex flex-col">
      <h1>{slides[activeIndex].title}</h1>
    </div>
    <div class="flex flex-col">
      <p>{slides[activeIndex].description}</p>
    </div>
  </div>
  <div class="flex flex-row justify-between align-middle absolute bottom-0 left-0 w-full">
    <button class="p-4 m-2" on:click={SlidesStore.previous}>previous</button>
    <button class="p-4 m-2" on:click={SlidesStore.next}>next</button>
  </div>
</div>
