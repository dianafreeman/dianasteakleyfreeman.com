<script>
  import NavItem from "./NavItem.svelte";
  import AccessNav from "./AccessNav.svelte";
  import { writable } from "svelte/store";
  import NavToggle from "./NavToggle.svelte";

  let scrollY;
  const mobileMenuOpen = writable(false);
  const accessNavOpen = writable(false);
</script>

<svelte:window bind:scrollY />

<nav class="absolute w-full z-50 {scrollY > 90 ? 'semi-transparent' : ''}">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-end h-16">
      <div class="flex flex-1 items-center">
        <a href="/" class="text-2xl lg:text-3xl xl:text-4xl inline-flex font-bold"
        >D<span class="text-gray-400">iana</span>.</a
      >
      
      </div>

      <div class="hidden sm:block">
        <div class="flex space-x-4">
          <!-- Current: "bg-neutral-900 text-white", Default: "text-neutral-300 hover:bg-neutral-700 hover:text-white" -->
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </div>
      </div>
      <div class="sm:ml-6 sm:block flex">
        <NavToggle {mobileMenuOpen} />
      </div>
      <div class="flex items-center px-3">
        <AccessNav />
      </div>
      
    </div>

    {#if $mobileMenuOpen}
      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="sm:hidden " id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 left-0 absolute w-full bg-neutral-900 z-50">
          <!-- Current: "bg-neutral-900 text-white", Default: "text-neutral-300 hover:bg-neutral-700 hover:text-white" -->
          <a
            href="/about"
            class="text-neutral-300 hover:bg-neutral-700 block px-3 py-2 rounded-md text-base font-medium"
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

<style>
  .semi-transparent {
    background-color: rgba(23, 23, 23, 0.89);
    transition-property: background-color;
    transition-timing-function: ease-in;
  }
</style>
