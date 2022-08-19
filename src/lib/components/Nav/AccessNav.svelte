<script>
  import Accessibility from "$lib/icons/accessibility.svelte";
  import { writable } from "svelte/store";

  const isOpen = writable(false);
</script>

<!-- Accessibility dropdown -->
<div class="relative">
  <div>
    <button
      type="button"
      class="bg-neutral-800 text-neutral-400 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-white"
      id="user-menu-button"
      aria-expanded="false"
      aria-haspopup="true"
      on:click={() => isOpen.update((curr) => !curr)}
    >
      <span class="sr-only">Open Accessibility menu</span>
      <Accessibility class="h-6 w-6" fill="currentColor" />
    </button>
  </div>
  {#if $isOpen}
    <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
    <div
      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabindex="-1"
    >
      <!-- Active: "bg-neutral-100", Not Active: "" -->
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

<!-- 

      <div class="pt-4 pb-3 border-t border-neutral-700">
      <div class="flex items-center px-5">
        <div class="flex-shrink-0">
          <span class="sr-only">Open Accessibility menu</span> 
          <Accessibility class="h-6 w-6" fill="currentColor" />
        </div>
        <div class="ml-3">Accessibility Menu</div>
      </div>
      <div class="mt-3 px-2 space-y-1">
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-neutral-400 hover:text-white hover:bg-neutral-700"
          >Your Profile</a
        >
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-neutral-400 hover:text-white hover:bg-neutral-700"
          >Settings</a
        >
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-neutral-400 hover:text-white hover:bg-neutral-700"
          >Sign out</a
        >
      </div>
    </div>
 -->
