<script>
  import { page } from "$app/stores";
  import NavLink from "./NavLink.svelte";
  import SettingsPanel from "$lib/components/SettingsPanel.svelte";

  export let items;
  export let menuOpen;

  const navLinkClasses =
    "text-neutral-200 focus:bg-neutral-800 focus:outline-white hover:bg-neutral-800 px-4 block py-5 text-base font-medium text-right";

  $: $page.url.pathname && menuOpen.set(false);
</script>

<!-- <div class="overflow-x-hidden overflow-y-scroll h-screen"> -->
<div class="">
<!-- <div class="overflow-x-hidden overflow-y-scroll h-screen" class:hidden={!$menuOpen}> -->
  <nav
    id="main-menu"
    aria-expanded={$menuOpen}
    class="flex-col justify-between"
    aria-label="Primary"
    
  >
    <hr class="font-bold text-sm border-neutral-600 uppercase my-5" />
    <ul class="relative flex flex-col w-full justify-center" role="menu" aria-hidden={!$menuOpen} aria-label="Main Naviagation">
      {#each items as navItem}
        <li role="menuitem">
          <NavLink href={navItem.relativePath} class={navLinkClasses}
            >{navItem.navigationText}</NavLink
          >
        </li>
      {/each}
    </ul>
    <ul class="relative flex flex-col w-full justify-center" role="menu" aria-label="Settings">
      <SettingsPanel />
    </ul>
  </nav>
</div>
