<script>
  import { writable } from "svelte/store";
  import AccessNavToggle from "./AccessNavToggle.svelte";
  import NavToggle from "./NavToggle.svelte";
  import layoutStore from "$stores/LayoutStore";
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  let scrollY;
  let innerWidth;
  let nav;
  const mobileMenuOpen = writable(false);
  const accessNavOpen = writable(false);

  const { setScrollY, setNavHeight, toggleMode, combined } = layoutStore;
  console.log("top", $layoutStore.navHeight);

  $: setScrollY(scrollY);

  onMount(() => {
    setNavHeight(nav.clientHeight);
  });
</script>

<div class="fixed top-0 left-0 right-0 z-50 bg-neutral-900">
  <nav
    bind:this={nav}
    class:semi-transparent={scrollY > $layoutStore.navHeight}
    class="relatve w-full max-w-7xl mx-auto sm:px-6 lg:px-8"
  >
    <div id="top-bar" class="flex items-center">
      <div class="flex-1">
        <a href="/" class="text-2xl lg:text-3xl xl:text-4xl inline-flex font-bold"
          >D<span class="text-gray-400">iana</span>.</a
        >
      </div>
      <NavToggle {mobileMenuOpen} />
    </div>
    <div id="bottom-bar" class="flex items-center justify-between">
      <!-- <p class="text-xs">On this page</p>
      <ol>
        <li />
      </ol> -->
    </div>
    {#if $mobileMenuOpen}
      <div
        transition:slide
        id="main-menu"
        class="relative left-0 pb-3 w-full z-50 md:relative md:flex"
        style="top: {$layoutStore.navHeight};"
      >
        <p class="font-bold text-center border-t pt-4">Sections</p>
        {#each layoutStore.validCategories as category}
          <a
            href="/{category}"
            class="text-neutral-300 px-4 hover:bg-neutral-700 block py-5 text-base font-medium"
            >{category}</a
          >
        {/each}
        <p class="font-bold text-center border-t pt-4">Accessibility Tools</p>
        <div>
          <p
            href="#"
            class="text-neutral-300 px-4 hover:bg-neutral-700 block py-5 text-base font-medium"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-0"
          >
            Dyslexia Font
            <button aria-pressed="true" class="hover:bg-neutral-600"> Toggle On </button>
          </p>
        </div>
        <p
          href="#"
          class="text-neutral-300 hover:bg-neutral-700 block px-3 py-5 text-base font-medium"
          role="menuitem"
          tabindex="-1"
          id="user-menu-item-1"
        >
          Dark
        </p>
        <p
          href="#"
          class="text-neutral-300 hover:bg-neutral-700 block px-3 py-5 text-base font-medium"
          role="menuitem"
          tabindex="-1"
          id="user-menu-item-2"
        >
          Clear Settings
        </p>
        <hr class="my-5" />
        <!-- <p class="font-bold"></p> -->
        <ol>
          <li>Social Links</li>
        </ol>
      </div>
    {/if}
  </nav>
</div>

<style>
  .semi-transparent {
    background-color: rgba(23, 23, 23, 0.89);
    transition-property: background-color;
    transition-timing-function: ease-in;
  }
</style>
