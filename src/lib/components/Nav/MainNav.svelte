<script>
  import { isMobileScreen } from "$stores/LayoutStore";
  import NavToggle from "./NavToggle.svelte";
  import Button from "../Buttons/Button.svelte";
  import { writable } from "svelte/store";
  import NavBrand from "./NavBrand.svelte";
  import SettingsPanel from "../SettingsPanel.svelte";

  const navItemClasses = `inherit px-8 py-5 text-left md:text-right`;

  export let items;
  export let menuId = "mainMenu";

  export const mainMenuIsOpen = writable(true);
  export const settingsMenuIsOpen = writable(false);

  let showToggle;

  isMobileScreen.subscribe((isMobile) => {
    if (isMobile) {
      showToggle = true;
    } else {
      showToggle = false;
      mainMenuIsOpen.set(true);
    }
  });
</script>

<nav
  class="fixed w-screen m-auto flex h-fit flex-row flex-wrap justify-between bg-black z-50">
  <NavBrand class="" />

  <div class=" flex">
    {#if showToggle}
      <NavToggle
        on:click={() => {
          mainMenuIsOpen.update((v) => !v);
        }}
        label="Menu"
        hideLabel
        iconType={"hamburger"}
        id={menuId}
        expanded={$mainMenuIsOpen} />
    {/if}
  </div>
  <ul
    id={menuId}
    class="flex w-full flex-grow list-none flex-col items-center justify-center md: md:w-fit md:flex-row md:justify-end">
    {#each items as item}
      <li
        role="menuitem"
        class="w-full py-2 px-3 md:w-fit text-white"
        aria-hidden={!$mainMenuIsOpen}
        class:hidden={!$mainMenuIsOpen}>
        <Button
          type="a"
          elementProps={{ href: item.url }}
          class={navItemClasses}>{item.label}</Button>
      </li>
    {/each}
  </ul>
  <div class="w-full py-2 px-3 md:w-fit text-white  text-right">
    <NavToggle
      class={navItemClasses}
      borders={false}
      animateBorders={false}
      label="settings"
      iconType="settings"
      on:click={() => {
        settingsMenuIsOpen.update((v) => !v);
      }} />
  </div>

  <div class="flex relative justify-end">
    <SettingsPanel expanded={$settingsMenuIsOpen} />
  </div>
</nav>
