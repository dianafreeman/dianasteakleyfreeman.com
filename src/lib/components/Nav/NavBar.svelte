<script>
  import { writable } from "svelte/store";
  import AccessNav from "./AccessNav.svelte";
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
  console.log('combined',$combined)

  $: setScrollY(scrollY);

  onMount(() => {
    setNavHeight(nav.clientHeight);
  });
</script>

<svelte:window bind:scrollY bind:innerWidth />

<nav
  bind:this={nav}
  class="absolute w-full z-50 {scrollY > $layoutStore.navHeight ? 'semi-transparent' : ''}"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-end h-16">
      <div class="flex flex-1 items-center">
        <a href="/" class="text-2xl lg:text-3xl xl:text-4xl inline-flex font-bold"
          >D<span class="text-gray-400">iana</span>.</a
        >
      </div>
      <div class="sm:ml-6 flex md:hidden">
        <NavToggle {mobileMenuOpen} />
      </div>
      <div class="flex items-center px-3">
        <AccessNav toggle={() => accessNavOpen.update((curr) => !curr)} />
      </div>
      <!-- {#if innerWidth > 768}

      {/if} -->
      <div
        class="absolute left-0 right-0 top-[{$layoutStore.navHeight}px] mt-2 w-full py-1 ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
      >
        {#if $mobileMenuOpen}
          <div
            transition:slide
            id="main-menu"
            class="px-2 pt-2 pb-3 left-0 w-full bg-neutral-900 z-50 md:relative md:flex"
            style:top="{$layoutStore.navHeight}px"
          >
            <!-- <p class="font-bold">Main Navigation</p> -->
            {#each layoutStore.validCategories as category}
              <a
                href="/{category}"
                class=" text-neutral-300 hover:bg-neutral-700 block px-3 py-5 text-base font-medium"
                >{category}</a
              >
            {/each}
          </div>
        {/if}

        {#if $accessNavOpen}
          <div transition:slide role="menu" aria-labelledby="user-menu-button" tabindex="-1">
            <!-- Active: "bg-neutral-100", Not Active: "" -->
            <p class="font-bold">Accessibility Tools</p>

            <a
              href="#"
              class="block px-4 py-2 text-sm text-neutral-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-0">One Setting</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-neutral-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-1">Another Setting</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-neutral-700"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-2">Clear Settings</a
            >
          </div>
        {/if}
      </div>
    </div>
  </div>
</nav>

<style>
  .semi-transparent {
    background-color: rgba(23, 23, 23, 0.89);
    transition-property: background-color;
    transition-timing-function: ease-in;
  }
</style>
