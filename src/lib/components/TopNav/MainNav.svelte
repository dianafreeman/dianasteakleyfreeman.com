<script>
  import NavToggle from "./NavToggle.svelte";
  import Button from "../Buttons/Button.svelte";
  import { derived, writable } from "svelte/store";
  import NavBrand from "./NavBrand.svelte";


  import { isMobile } from "$stores/isMobile";
  import SettingsPanel from "./SettingsPanel.svelte";

  const navItemClasses = `hover:text-blue-500 focus:text-blue-500 active:text-blue-500 font-mono hover:underline active:underline focus:underline font-bold text-xl flex items-center p-5 w-full `;

  export let items;

  export const settingsMenuIsOpen = writable(false);
  settingsMenuIsOpen.subscribe(v => {
   console.log({ settingsMenu: v})
  })
  export const _menuIsOpen = writable(false); // Internal store to manage the open state

  export const menuIsOpen = derived(
    [isMobile, _menuIsOpen],
    ([$isMobile, $_menuIsOpen], set) => {
      // If it's mobile view, respect the internal state, otherwise always keep the menu open
      set($isMobile ? $_menuIsOpen : true);
    }
  );

  // Toggle function for menu
  export function toggleMenu() {
    _menuIsOpen.update((currentValue) => {
      return !currentValue; // Simply toggle the internal state
    });
  }
</script>

<nav class="font-mono" aria-label="Main Navigation">
  <div class="flex flex-row justify-between md:flex">
    <div>
      <!-- nav brand wrapper for flex-->
      <NavBrand class="" />
    </div>
    <div class="w-full md:w-fit md:flex md:flew-row">
      <!-- menu grouping wrapper -->
      <div class="w-full md:flex md:w-fit md:flex-row">
        <NavToggle
          class={`${navItemClasses} md:hidden`}
          on:click={toggleMenu}
          label="menu"
          iconType="hamburger"
          elementProps={
            { "aria-expanded": $menuIsOpen, "aria-controls": "mainMenu" }
          } />
        <ul
          id="mainMenu"
          class="flex list-none flex-col md:flex-row items-center justify-center w-full">
          {#each items as item}
            <li
              class="w-full text-white"
              aria-hidden={!$menuIsOpen}
              class:hidden={!$menuIsOpen}>
              <Button
                type="a"
                elementProps={{ href: item.url }}
                class={navItemClasses}>{item.label}</Button>
            </li>
          {/each}
        </ul>
      </div>
      <div class="w-full md:flex md:flex-col md:items-end relative">
        <NavToggle
          label="settings"
          iconType="settings"
          class={`${navItemClasses} md:justify-end`}
          elementProps={{ "aria-expanded": $settingsMenuIsOpen, "aria-controls": "settingsPanel" }}
          on:click={() => {
            settingsMenuIsOpen.update((v) => !v);
          }} />
        <SettingsPanel id="settingsPanel" onCloseClick={() => settingsMenuIsOpen.set(false)} isOpen={$settingsMenuIsOpen} {navItemClasses} />
      </div>
    </div>
    <!-- end menu grouping wrapper -->
  </div>
</nav>
