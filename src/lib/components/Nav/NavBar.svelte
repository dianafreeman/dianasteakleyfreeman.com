<script>
  import { writable } from "svelte/store";
  import LayoutStore from "$stores/LayoutStore";
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import Toggle from "../Toggle.svelte";
  import Button from "../Button.svelte";

  let navWrapper;
  let expandedMenu;
  let focusableContent;
  let firstFocusableElement;
  let lastFocusableElement;

  const focusableElements =
    'a, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  const navLinkClasses =
    "text-neutral-300 focus:bg-neutral-800 focus:outline-white hover:bg-neutral-800 px-4 block py-5 text-base font-medium text-center";
  const settingItemClasses =
    "text-neutral-300 px-4 flex justify-between items-center py-5 text-base font-medium";

  const navWrapperClassesClosed = "h-fit";
  const navWrapperClassesOpen = "h-screen overflow-y-scroll";

  const menuOpen = writable(false);
  const toggleMenu = () => menuOpen.update((bool) => !bool)
  const { setNavHeight } = LayoutStore;

  onMount(() => {
    function onKeyDown(e) {
      let isTabPressed = e.key === "Tab" || e.keyCode === 9;
      let isEscPressed = e.key === "Escape" || e.keyCode === 27

      if (isEscPressed){
        return menuOpen.set(false)
      }
      if (!isTabPressed) {
        return;
      }
      if (e.shiftKey) {
        // if shift key pressed for shift + tab combination
        if (document.activeElement === firstFocusableElement) {
          // lastFocusableElement.focus(); // add focus for the last focusable element
          e.preventDefault();
        }
      } else {
        // if tab key is pressed
        if ($menuOpen && document.activeElement === lastFocusableElement) {
          // if focused has reached to last focusable element then focus first focusable element after pressing tab
          firstFocusableElement.focus(); // add focus for the first focusable element
          e.preventDefault();
        }
      }
    }

    // Set navigation height so other components can use it
    // TODO: do we need this?
    setNavHeight(navWrapper.clientHeight);

    focusableContent = navWrapper.querySelectorAll(focusableElements);
    firstFocusableElement = focusableContent[0]; // get first element to be focused inside modal
    lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


    document.addEventListener("keydown", onKeyDown);
  });

</script>

<nav
  bind:this={navWrapper}
  class:bg-neutral-900={$menuOpen}
  class:semi-transparent={!$menuOpen && $LayoutStore.scrollY > $LayoutStore.navHeight}
  class="fixed top-0 left-0 right-0 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 {$menuOpen
    ? navWrapperClassesOpen
    : navWrapperClassesClosed}"
>
  <div class="flex items-center justify-between">
    <a href="/" class="text-2xl lg:text-3xl xl:text-4xl inline-flex font-bold"
      >D<span class="text-gray-400">iana</span>.</a
    >

    <Button type="button" onClick={toggleMenu}>
      {#if $menuOpen}
        <i class="text-3xl las la-times" />
      {:else}
        <i class="text-3xl las la-bars" />
      {/if}
    </Button>
  </div>

  <div
    bind:this={expandedMenu}
    id="main-menu"
    class:hidden={!$menuOpen}
    class:flex={$menuOpen}
    class="flex-col justify-between hidden"
  >
    <ul class="relative flex flex-col w-full justify-center">
      <li>
        <a href="/" class={navLinkClasses}>home</a>
      </li>

      {#each LayoutStore.validCategories as category}
        <li>
          <a href="/{category}" class={navLinkClasses}>{category}</a>
        </li>
      {/each}
    </ul>

    <!-- <hr class="border-neutral-500 my-10" /> -->
    <!-- ACCESS NAV -->
    <ul class="flex flex-col">
      <li>
        <p href="#" class={settingItemClasses} role="menuitem" id="user-menu-item-0">
          dyslexia mode
          <Toggle />
        </p>
      </li>
      <li>
        <p href="#" class={settingItemClasses} role="menuitem"  id="user-menu-item-1">
          allow google analytics
          <Toggle />
        </p>
        <p
          
          class="text-neutral-300 hover:text-white text-right block px-3 py-5 text-base font-medium"
          role="menuitem"
        
          id="user-menu-item-2"
        >
          Clear Settings
        </p>
      </li>
    </ul>
  </div>
</nav>

<!-- </div> -->
<style>
  .semi-transparent {
    background-color: rgba(23, 23, 23, 0.89);
    transition-property: background-color;
    transition-timing-function: ease-in;
  }
</style>
