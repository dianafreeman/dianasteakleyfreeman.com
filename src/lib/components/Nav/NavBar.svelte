<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import NavigationStore from "$stores/NavigationStore";
  import NavBrand from "./NavBrand.svelte";
  import NavItem from "./NavItem.svelte";
  import NavToggle from "./NavToggle.svelte";
  import DoubleChevronRight from "$lib/icons/doubleChevronRight.svelte";
  import IntroStore from "$stores/IntroStore";
  import TrailStore from "$stores/TrailStore";

  export let contentColor;

  function handleClick() {
    NavigationStore.toggleNav();
  }

  function flip3d(_node, options) {
    return {
      ...options,
      css(t) {
        return `transform: perspective(100px) rotateY(${t * 180}deg)`;
      }
    };
  }
</script>

<nav class="w-full fixed z-50">
  <ul transition:fade class="list-none flex flex-row align-middle w-full">
    <NavItem class="flex-1 p-10">
      <NavBrand color={contentColor} />
    </NavItem>

    <slot />
    <NavItem class="p-10">
      {#if !$IntroStore.isComplete && $IntroStore.isShowing}
        <!-- IntroSkip Button -->
        <div in:fade>
          <button
            style="color: {contentColor}"
            class="w-10 mx-2 text-black"
            on:click={() => {
              TrailStore.skip();
              IntroStore.setIsComplete(true);
            }}><DoubleChevronRight /></button
          >
        </div>
      {:else}
        <!-- NavToggle -->
        <div out:flip3d>
          <NavToggle
            isOpen={$NavigationStore.isOpen}
            color={contentColor}
            class="w-10 mx-2"
            onClick={handleClick}
          />
        </div>
      {/if}
    </NavItem>
  </ul>
</nav>
