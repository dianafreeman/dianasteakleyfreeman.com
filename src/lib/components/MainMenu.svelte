<script>
  import { mainMenuIsOpen, settingsMenuIsOpen, isMobileScreen } from "$stores/LayoutStore";
  import createButtonClasses from "$lib/createButtonClasses";
  import MenuToggle from "./MenuToggle.svelte";
  import { page } from "$app/stores";

  const buttonClasses = createButtonClasses();

  const navItemClasses = `${buttonClasses} inherit px-4 py-5 text-left md:text-right`;

  export let items;

  $: isActive = (item) => $page.url.pathname === item.relativePath;
</script>

{#if $isMobileScreen}
  <div class="flex-grow justify-start">
    <MenuToggle
      on:click={() => {
        settingsMenuIsOpen.set(false);
        mainMenuIsOpen.update((v) => !v);
      }}
      label="menu"
      menuType="hamburger"
      iconType={$mainMenuIsOpen ? "times" : "hamburger"}
      id="mainMenu"
      hideLabel
      expanded={$mainMenuIsOpen}
    />
  </div>
{/if}
<ul
  aria-expanded={$mainMenuIsOpen}
  class="order-3 flex w-full flex-grow list-none flex-col items-center justify-center md:order-2 md:w-fit md:flex-row md:justify-end"
>
  {#each items as item}
    <li
      role="menuitem"
      class="m-2 w-full md:w-fit"
      aria-hidden={!$mainMenuIsOpen}
      class:hidden={!$mainMenuIsOpen}
    >
      <a
        href={item.relativePath}
        class="{navItemClasses} {isActive(item) ? 'font-bold underline underline-offset-8' : ''}"
        >{item.navigationText}</a
      >
    </li>
  {/each}
</ul>
