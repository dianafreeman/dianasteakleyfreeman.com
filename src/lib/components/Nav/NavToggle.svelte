<script>
  export let mobileMenuOpen;
</script>

<div class="-mr-2 flex ">
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
