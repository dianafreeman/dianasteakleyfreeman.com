<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import SlidesStore from "$stores/SlidesStore";
  import SideNavStore from "$stores/SideNavStore";
  import NavBrand from "./NavBrand.svelte";

  let isOpen;
  let slides;
  let activeColor;
  let activeIdx;

  SlidesStore.subscribe((data) => {
    slides = data.slides;
    activeIdx = data.activeIndex;
    activeColor = slides[activeIdx].color;
  });

  function handleClick(activeIndex) {
    SlidesStore.setActiveIndex(activeIndex);
    setTimeout(() => {
      SideNavStore.update((sideNavOpen) => !sideNavOpen);
    }, 300);
  }

  SideNavStore.subscribe((sideNavOpen) => {
    isOpen = sideNavOpen;
  });
</script>

{#if isOpen}
  <div
    transition:fly={{ x: 100 }}
    class="absolute w-full h-screen lg:w-1/2 p-5 right-0 top-0 text-black"
    style="background-color: rgba(255,255,255); z-index: 100;"
  >
    <div class="flex flex-col w-full m-auto h-full">
      <div class="p-5">
        <NavBrand color={activeColor} />
      </div>

      <div class="flex flex-row flex-1">
        <div class="m-auto">
          {#each slides as item, i}
            <li
              class="border-l-8 list-none my-2 flex-row"
              style="border-color:{i === activeIdx ? activeColor : 'transparent'}"
            >
              <button
                on:click={() => handleClick(i)}
                class="font-bold text-5xl pl-4"
                style="color: {i === activeIdx ? activeColor : 'gray'};">{item.title}</button
              >
            </li>
          {/each}
        </div>
      </div>
      <div class="flex flex-row justify-center py-6" style="color: {activeColor};">
        <a href="/about" class="mx-9 font-light">About</a>
        <a href="/contact" class="mx-9 font-light">Contact</a>
      </div>
    </div>
  </div>
{/if}
