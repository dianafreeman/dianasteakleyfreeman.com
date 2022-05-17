<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import NavigationStore from "$stores/NavigationStore";
  import NavBrand from "./NavBrand.svelte";
  import NavItem from "./NavItem.svelte";
  import NavToggle from "./NavToggle.svelte";
  import DoubleChevronRight from "$lib/icons/doubleChevronRight.svelte";
  import IntroStore from "$stores/IntroStore";
  // import store from "$lib/animations/Trail/store";

  function handleClick() {
    NavigationStore.toggleNav();
  }

  function flip3d(_node, options) {
    return {
      ...options,
      // The value of t passed to the css method
      // varies between zero and one during an "in" transition
      // and between one and zero during an "out" transition.
      css(t) {
        // Svelte takes care of applying the easing function.
        return `transform: perspective(100px) rotateY(${t * 180}deg)`;
      }
    };
  }
</script>

<nav class="w-full fixed z-50">
  <ul transition:fade class="list-none flex flex-row align-middle w-full">
    <NavItem class="flex-1 p-10">
      {#if $IntroStore.isComplete || !$IntroStore.isShowing}
        <NavBrand color={$IntroStore.isShowing ? "black" : "white"} />
      {/if}
    </NavItem>
    <NavItem class="p-10">
      <button transition:fade class="absolute w-full top-0 left-0 text-center bg-black">
        Show Intro
      </button>
    </NavItem>
    <NavItem class="p-10">
      {#if $IntroStore.isComplete}
        <div out:flip3d>
          <NavToggle isOpen={$IntroStore.isOpen} class="w-10 mx-2" onClick={handleClick} />
        </div>
      {:else}
        <div in:fade>
          <button class="w-10 mx-2"><DoubleChevronRight /></button>
        </div>
      {/if}
    </NavItem>
  </ul>
</nav>
