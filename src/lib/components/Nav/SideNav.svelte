<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import SlidesStore from "$stores/SlidesStore";
  import NavigationStore from "$stores/NavigationStore";
  import NavBrand from "./NavBrand.svelte";
  import { onMount } from "svelte";
  import NavToggle from "./NavToggle.svelte";

  export let color;
  let isOpen;
  let slides;
  let activeIdx;

  SlidesStore.subscribe((data) => {
    slides = data.slides;
    activeIdx = data.activeIndex;
  });

  function handleClick(activeIndex) {
    SlidesStore.setActiveIndex(activeIndex);
    setTimeout(() => {
      NavigationStore.update((options) => (options.isOpen = !isOpen));
    }, 300);
  }

  NavigationStore.subscribe((options) => {
    isOpen = options.isOpen;
  });
</script>

{#if isOpen}
  <div
    transition:fly={{ x: 100 }}
    class="absolute w-full h-screen xl:w-1/2 p-12 right-0 top-0 text-black bg-white"
  >
    <div class="flex flex-col w-full m-auto h-full">
      <div class="flex flex-row flex-1">
        <div class="m-auto">
          {#each slides as item, i}
            <li
              class="border-l-8 list-none my-2 flex-row"
              style="border-color:{i === activeIdx ? color : 'transparent'}"
            >
              <button on:click={() => handleClick(i)} class="font-bold text-5xl pl-4"
                >{item.title}</button
              >
            </li>
          {/each}
        </div>
      </div>
      <div class="flex flex-row justify-center py-6">
        <a href="/about" class="mx-9 font-light">About</a>
        <a href="/contact" class="mx-9 font-light">Contact</a>
      </div>
    </div>
  </div>
{/if}
