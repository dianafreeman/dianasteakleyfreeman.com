<script>
  import Accessibility from "$lib/icons/accessibility.svelte";

  export let toggle;
</script>

<!-- Accessibility dropdown -->
<!-- <div class="w-full"> -->
<div>
  <button
    type="button"
    class="flex rounded-full bg-medium-gray text-sm text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800"
    id="user-menu-button"
    aria-expanded="false"
    aria-haspopup="true"
    on:click={toggle}
  >
    <span class="sr-only">Open Accessibility menu</span>
    <Accessibility class="h-6 w-6" fill="currentColor" />
  </button>
</div>
