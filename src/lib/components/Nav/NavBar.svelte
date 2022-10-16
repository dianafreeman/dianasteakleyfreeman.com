<script>
  import { writable } from "svelte/store";
  // import AccessNavToggle from "./AccessNavToggle.svelte";
  // import NavToggle from "./NavToggle.svelte";
  import layoutStore from "$stores/LayoutStore";
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import Toggle from "../Toggle.svelte";
  import Button from "../Button.svelte";

  let scrollY;
  let innerWidth;
  let nav;
  const menuOpen = writable(false);

  const { setScrollY, setNavHeight } = layoutStore;
  console.log("top", $layoutStore.navHeight);

  $: setScrollY(scrollY);

  const navLinkClasses =
    "text-neutral-300 focus:bg-neutral-800 focus:outline-white hover:bg-neutral-800 px-4 block py-5 text-base font-medium text-center";
  const settingItemClasses =
    "text-neutral-300 px-4 flex justify-between items-center py-5 text-base font-medium";

  onMount(() => {
    setNavHeight(nav.clientHeight);
  });
</script>

<!-- <div class="fixed top-0 left-0 right-0 z-50 {$menuOpen ? 'h-screen bg-neutral-900' : ''}"> -->
<nav
  bind:this={nav}
  class:semi-transparent={scrollY > $layoutStore.navHeight}
  class="fixed top-0 left-0 right-0 z-50 {$menuOpen
    ? 'h-screen overflow-y-scroll bg-neutral-900'
    : ''} relatve w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 "
>
  <div class="flex items-center">
    <div class="flex-1">
      <a href="/" class="text-2xl lg:text-3xl xl:text-4xl inline-flex font-bold"
        >D<span class="text-gray-400">iana</span>.</a
      >
    </div>
    <Button type="button" onClick={() => menuOpen.update((bool) => !bool)}>
      {#if $menuOpen}
        <i class="text-3xl las la-times" />
      {:else}
        <i class="text-3xl las la-bars" />
      {/if}
    </Button>
  </div>
  {#if $menuOpen}
    <div id="menu-container" class="flex flex-col justify-between">
      <ul
        class="relative flex flex-col w-full justify-center"
        transition:slide
        id="main-menu"
        style="top: {$layoutStore.navHeight};"
      >
        <li>
          <a href="/" class={navLinkClasses}>home</a>
        </li>

        {#each layoutStore.validCategories as category}
          <li>
            <a href="/{category}" class={navLinkClasses}>{category}</a>
          </li>
        {/each}
      </ul>

      <!-- <hr class="border-neutral-500 my-10" /> -->
      <!-- ACCESS NAV -->
      <ul class="flex flex-col">
        <li>
          <p
            href="#"
            class={settingItemClasses}
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-0"
          >
            dyslexia mode
            <Toggle />
          </p>
        </li>
        <li>
          <p
            href="#"
            class={settingItemClasses}
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-1"
          >
            allow google analytics
            <Toggle />
          </p>
          <p
            href="#"
            class="text-neutral-300 hover:text-white text-right block px-3 py-5 text-base font-medium"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-2"
          >
            Clear Settings
          </p>
        </li>
      </ul>
    </div>
  {/if}
</nav>

<!-- </div> -->
<style>
  .semi-transparent {
    background-color: rgba(23, 23, 23, 0.89);
    transition-property: background-color;
    transition-timing-function: ease-in;
  }
</style>
