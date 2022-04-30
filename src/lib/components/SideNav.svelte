<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import SlidesStore from "$stores/SlidesStore";
  import SideNavStore from "$stores/SideNavStore";
  import NavBrand from "./NavBrand.svelte";
  export let items;
  
  let isOpen;
  let slides;
  let activeIdx = 0;
  let activeColor = "cyan";

  SlidesStore.subscribe((data) => {
    slides = data.slides;
    activeIdx = data.activeIndex;
    activeColor = slides[activeIdx].color;
  });

  function handleClick(activeIndex){
    SlidesStore.setActiveIndex(activeIndex);
    SideNavStore.update((sideNavOpen) => !sideNavOpen)
  }

  SideNavStore.subscribe( sideNavOpen => {
    isOpen = sideNavOpen
  })
</script>

{#if isOpen}
  <div
    transition:slide
    class="absolute w-full h-screen lg:w-1/2 p-5 right-0 top-0 text-black"
    style="background-color: rgba(255,255,255); z-index: 100;"
  >
    <div class="flex flex-col w-full m-auto h-full">
      <!-- class="w-full p-10" -->
      <div class="p-5">
        <NavBrand color={activeColor} />
      </div>

      <div class="flex flex-row flex-1">
        <div class="m-auto">
          {#each items as item, i}
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
