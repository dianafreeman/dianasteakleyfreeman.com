<script>
  import AccessNav from "./AccessNav.svelte";
  import { writable } from "svelte/store";
  import NavToggle from "./NavToggle.svelte";

  let scrollY;
  let innerWidth;
  const mobileMenuOpen = writable(false);
  const accessNavOpen = writable(false);
</script>

<svelte:window bind:scrollY bind:innerWidth />

<nav class="absolute w-full z-50 {scrollY > 90 ? 'semi-transparent' : ''}">
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

    {#if innerWidth > 768 || $mobileMenuOpen}
    <div class="" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 left-0 absolute w-full bg-neutral-900 z-50 md:relative md:flex">
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
    <div class="flex items-center px-3">
      <AccessNav />
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
