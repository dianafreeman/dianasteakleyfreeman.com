<script>
  import {
    mainMenuIsOpen,
    settingsMenuIsOpen,
    isMobileScreen
  } from "$stores/LayoutStore";
  import NavToggle from "./NavToggle.svelte";
  import Button from "../Buttons/Button.svelte";
  import { page } from "$app/stores";

  const navItemClasses = `inherit px-8 py-5 text-left md:text-right`;

  export let items;

  $: isActive = (item) => $page.url.pathname === item.relativePath;
</script>

<div class="order-3 flex ">
  {#if $isMobileScreen}
    <NavToggle
      on:click={() => {
        settingsMenuIsOpen.set(false);
        mainMenuIsOpen.update((v) => !v);
      }}
      label="menu"
      menuType="hamburger"
      iconType={$mainMenuIsOpen ? "close" : "menu"}
      id="mainMenu"
      hideLabel
      expanded={$mainMenuIsOpen} />
  {/if}
</div>
<ul
  aria-expanded={$mainMenuIsOpen}
  class="order-4 flex w-full flex-grow list-none flex-col items-center justify-center md:order-2 md:w-fit md:flex-row md:justify-end">
  {#each items as item}
    <li
      role="menuitem"
      class="w-full py-2 px-3 md:w-fit"
      aria-hidden={!$mainMenuIsOpen}
      class:hidden={!$mainMenuIsOpen}>
      <Button
        elementType="a"
        elementProps={{ href: item.relativePath }}
        class="{navItemClasses} {isActive(item) ? 'bg-gray' : ''}"
        >{item.navigationText}</Button>
    </li>
  {/each}
</ul>
