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

<div class:invisible={!$menuOpen}>
<nav id="main-menu" class="flex-col justify-between" aria-label="Primary" role="menu">
  <!-- <hr class="font-bold text-sm border-neutral-600 uppercase my-5" /> -->
  <ul class="relative flex flex-col w-full justify-center">
    {#each items as navItem}
      <li role="menuitem">
        <NavLink
          href={navItem.relativePath}
          class={navLinkClasses}>{navItem.navigationText}</NavLink
        >
      </li>
    {/each}
  </ul>
</nav>

<nav aria-label="Settings">
  {#if $menuOpen}
    <SettingsPanel />
  {/if}
</nav>
</div>
