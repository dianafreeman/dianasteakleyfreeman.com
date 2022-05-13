<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import NavigationStore from "$stores/NavigationStore";
  import NavBrand from "./NavBrand.svelte";
  import NavItem from "./NavItem.svelte";
  import NavToggle from "./NavToggle.svelte";
  import DoubleChevronRight from "$lib/icons/doubleChevronRight.svelte";
  import IntroStore from "$stores/IntroStore";
  // import SideNav from "./SideNav.svelte";

  export let onFullWidthToggleClick;
  export let toggleColor;
  export let textColor;
  export let shouldHide;
  // let items;
  let isOpen;
  let introIsShowing;
  let introIsDone;

  NavigationStore.subscribe((data) => {
    isOpen = data.isOpen;
    // items = data.items;
    // textColor = data.isOpen ? "black" : "white";
  });

  function handleClick() {
    NavigationStore.toggleNav();
  }

  IntroStore.subscribe(({ isShowing, isComplete }) => {
    introIsShowing = isShowing;
    introIsDone = isComplete;
  });

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

  function handleSkip(){
    
  }
</script>

<nav class="p-12 w-full fixed z-50 text-black">
  <ul transition:fade class="list-none flex flex-row align-middle w-full">
    <NavItem class="flex-1">
      {#if introIsDone}
        <NavBrand color={textColor} />
      {/if}
    </NavItem>

    {#if introIsDone}
      <div out:flip3d>
        <NavToggle {isOpen} class="w-10 mx-2" color={toggleColor} onClick={handleClick} />
      </div>
    {:else}
      <button class="w-10 mx-2" on:click={handleSkip}><DoubleChevronRight /></button>
    {/if}
  </ul>
</nav>
