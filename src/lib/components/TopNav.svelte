<script>
  import SettingsStore from "$stores/SettingsStore";
  import createButtonClasses from "$lib/createButtonClasses";

  import NavBrand from "$lib/components/NavBrand.svelte";
  import MenuToggle from "$lib/components/MenuToggle.svelte";
  import ToggleItem from "$lib/components/ToggleItem.svelte";

  import { mainMenuIsOpen, settingsMenuIsOpen, isMobileScreen } from "$stores/LayoutStore";

  export let navItems;

  const buttonClasses = createButtonClasses();
  const navLinkClasses = `${buttonClasses} inherit px-4 py-5 text-left md:text-right`;

  let trapFocusWapper;
  $: settingsItems = [
    {
      func: SettingsStore.toggleDyslexia,
      value: $SettingsStore.dyslexia === true,
      navigationText: "dyslexia mode"
    }
  ];
</script>

<div class="w-inherit relative left-0 right-0 h-full w-full {$mainMenuIsOpen ? 'h-0' : 'top-0 h'}">
  <div class="m-auto flex h-fit flex-row flex-wrap justify-between {$mainMenuIsOpen ? '' : ''}">
    <NavBrand class="" />
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
      {#each navItems as item}
        <li
          role="menuitem"
          class="m-2 w-full md:w-fit"
          aria-hidden={!(!$isMobileScreen ? false : $mainMenuIsOpen)}
          class:hidden={!$isMobileScreen ? false : $mainMenuIsOpen}
        >
          <a href={item.relativePath} class={navLinkClasses}>{item.navigationText}</a>
        </li>
      {/each}
    </ul>

    <MenuToggle
      on:click={() => {
        settingsMenuIsOpen.update((v) => !v);
      }}
      label="settings"
      menuType="settings"
      iconType={$settingsMenuIsOpen ? "close" : "settings"}
      hideLabel
      class="order-2"
      expanded={$settingsMenuIsOpen}
    />
  </div>
  {#if $settingsMenuIsOpen}
    <ul bind:this={trapFocusWapper} aria-hidden={!settingsMenuIsOpen}>
      {#each settingsItems as item}
        <ToggleItem on:click={() => item.func()} value={item.value}>
          {item.navigationText}
        </ToggleItem>
      {/each}
    </ul>
  {/if}
</div>
