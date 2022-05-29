<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import SlidesStore from "$stores/SlidesStore";
  import NavigationStore from "$stores/NavigationStore";

  export let color;
  export let background;
  let isOpen;

  function handleClick(activeIndex) {
    SlidesStore.setActiveIndex(activeIndex);
    setTimeout(() => {
      NavigationStore.update((options) => (options.isOpen = !isOpen));
    }, 300);
  }
</script>

{#if $NavigationStore.isOpen}
  <div
    transition:fly={{ x: 100 }}
    class="absolute w-screen h-screen p-12 right-0 top-0 text-black"
    style:background
  >
    <div class="flex flex-col w-full m-auto h-full">
      <div class="flex flex-row flex-1">
        <div class="m-auto" style:color>
          <!-- Slide List Navivation -->
          {#each $SlidesStore.slides as item, i}
            <li class="border-l-8 list-none my-2 flex-row">
              <button on:click={() => handleClick(i)} class="font-bold text-3xl pl-4"
                >{item.title}</button
              >
            </li>
          {/each}
        </div>
      </div>
      <div class="flex flex-row justify-center py-6">
        <a href="/about" class="mx-9 font-light" style:color>About</a>
        <a href="/contact" class="mx-9 font-light" style:color>Contact</a>
      </div>
    </div>
  </div>
{/if}
