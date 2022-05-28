<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import NavigationStore from "$stores/NavigationStore";
  import NavBrand from "./NavBrand.svelte";
  import NavItem from "./NavItem.svelte";
  import NavToggle from "./NavToggle.svelte";
  import DoubleChevronRight from "$lib/icons/doubleChevronRight.svelte";
  import IntroStore from "$stores/IntroStore";
  import TrailStore from "$stores/TrailStore";

  let introIsShowing;
  function handleClick() {
    NavigationStore.toggleNav();
  }

  IntroStore.subscribe((store) => {
    introIsShowing = store.isShowing;
  });

  function flip3d(_node, options) {
    return {
      ...options,
      css(t) {
        return `transform: perspective(100px) rotateY(${t * 180}deg)`;
      }
    };
  }
  $: textColor = introIsShowing ? "black" : "white";
</script>

<nav class="w-full fixed z-50">
  <ul transition:fade class="list-none flex flex-row align-middle w-full">
    <NavItem class="flex-1 p-10">
      <NavBrand color={$NavigationStore.isOpen ? "black" : textColor} />
    </NavItem>

    <NavItem class="p-10">
      {#if $IntroStore.isComplete}
        <!-- NavToggle -->
        <div out:flip3d>
          <NavToggle
            isOpen={$NavigationStore.isOpen}
            color={$NavigationStore.isOpen ? "black" : textColor}
            class="w-10 mx-2"
            onClick={handleClick}
          />
        </div>
      {:else}
        <!-- IntroSkip Button -->
        <div in:fade>
          <button
            class="w-10 mx-2 text-black"
            on:click={() => {
              TrailStore.skip();
              IntroStore.setIsComplete(true);
            }}><DoubleChevronRight /></button
          >
        </div>
      {/if}
    </NavItem>
  </ul>
</nav>
