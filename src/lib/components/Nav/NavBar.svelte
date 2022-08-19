<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import NavigationStore from "$stores/NavigationStore";
  import NavBrand from "./NavBrand.svelte";
  import NavItem from "./NavItem.svelte";
  import NavToggle from "./NavToggle.svelte";
  import AccessNav from "./AccessNav.svelte";
  import { writable } from "svelte/store";

  function handleClick() {
    NavigationStore.toggleNav();
  }

  const mobileMenuOpen = writable(false);
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-neutral-800 relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <NavBrand />
      </div>

      <div class="hidden sm:block">
        <div class="flex space-x-4">
          <!-- Current: "bg-neutral-900 text-white", Default: "text-neutral-300 hover:bg-neutral-700 hover:text-white" -->
          <NavItem href="/about">About</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </div>
      </div>
      <div class="sm:ml-6 sm:block flex">
        <div class="flex items-center px-3">
          <AccessNav />
        </div>

        <div class="-mr-2 flex sm:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            on:click={() => mobileMenuOpen.update((bool) => !bool)}
          >
            <span class="sr-only">Open main menu</span>
            {#if $mobileMenuOpen}
              <!--
            Heroicon name: outline/x
          -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            {:else}
              <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            {/if}
          </button>
        </div>
      </div>
    </div>

    {#if $mobileMenuOpen}
    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden " id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 left-0 absolute w-full bg-neutral-800 z-50">
        <!-- Current: "bg-neutral-900 text-white", Default: "text-neutral-300 hover:bg-neutral-700 hover:text-white" -->
        <a
          href="/about"
          class="bg-neutral-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >About</a
        >
        <a
          href="/blog"
          class="text-neutral-300 hover:bg-neutral-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Blog</a
        >
        <a
          href="/projects"
          class="text-neutral-300 hover:bg-neutral-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Projects</a
        >
        <a
          href="/contact"
          class="text-neutral-300 hover:bg-neutral-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Contact</a
        >
      </div>
    </div>
    {/if}
  </div>
</nav>
