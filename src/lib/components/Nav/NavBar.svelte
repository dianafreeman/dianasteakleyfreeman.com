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
</script>

<nav class="w-full absolute py-10 px-6 ">
  <ul transition:fade class="list-none flex flex-row justify-evenly">
    <NavItem class="flex-1">
      <NavBrand color={contentColor} />
    </NavItem> 
    <NavItem target="/about">ABOUT</NavItem>
    <NavItem target="/blog">BLOG</NavItem>
    <NavItem  target="/contact">CONTACT</NavItem>
    <!-- <NavItem>
      <NavToggle
        isOpen={$NavigationStore.isOpen}
        color={contentColor}
        class="w-10 mx-2"
        onClick={handleClick}
      />
    </NavItem> -->
  </ul>
</nav>
