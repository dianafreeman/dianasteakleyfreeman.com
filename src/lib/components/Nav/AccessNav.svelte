<script>
  import Accessibility from "$lib/icons/accessibility.svelte";
  import { writable } from "svelte/store";
  import { slide } from "svelte/transition";

  export let toggle
</script>

<!-- Accessibility dropdown -->
<!-- <div class="w-full"> -->
  <div>
    <button
      type="button"
      class="bg-neutral-800 text-neutral-400 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-white"
      id="user-menu-button"
      aria-expanded="false"
      aria-haspopup="true"
      on:click={toggle}
    >
      <span class="sr-only">Open Accessibility menu</span>
      <Accessibility class="h-6 w-6" fill="currentColor" />
    </button>
  </div>
  