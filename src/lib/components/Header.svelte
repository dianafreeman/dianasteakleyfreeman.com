<script>
  import SettingsStore from "$stores/SettingsStore";

  import NavBrand from "$lib/components/Nav/NavBrand.svelte";
  import MenuToggle from "$lib/components/Buttons/MenuToggle.svelte";
  import ToggleItem from "$lib/components/Buttons/ToggleItem.svelte";

  import { settingsMenuIsOpen } from "$stores/LayoutStore";
  import MainMenu from "./Nav/MainNav.svelte";

  export let navItems;

  let trapFocusWapper;

  $: settingsItems = [
    {
      func: SettingsStore.toggleDyslexia,
      value: $SettingsStore.dyslexia === true,
      navigationText: "dyslexia mode"
    }
  ];
</script>

<div class="w-inherit relative left-0 right-0 h-full w-full">
  <nav class="m-auto flex h-fit flex-row flex-wrap justify-between ">
    <NavBrand class="" />

    <MainMenu items={navItems} />

    <!-- Settings Menu Toggle, as part of the top nav -->
    <div class="flex flex-grow justify-end md:order-2">
      <MenuToggle
        on:click={() => {
          settingsMenuIsOpen.update((v) => !v);
        }}
        label="settings"
        menuType="settings"
        iconType={$settingsMenuIsOpen ? "close" : "settings"}
        hideLabel
        class=""
        expanded={$settingsMenuIsOpen}
      />
    </div>
  </nav>
  <!-- Settings menu items -->
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
