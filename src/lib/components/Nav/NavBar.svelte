<script>
  import SettingsStore from "$stores/SettingsStore";

  import NavBrand from "$lib/components/Nav/NavBrand.svelte";
  import NavToggle from "$lib/components/Nav/NavToggle.svelte";
  import ToggleItem from "$lib/components/Buttons/ToggleItem.svelte";

  import { settingsMenuIsOpen } from "$stores/LayoutStore";
  import MainNav from "./MainNav.svelte";

  export let navItems;

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

    <MainNav items={navItems} />

    <!-- Settings Menu Toggle, as part of the top nav -->
    <div class="flex flex-grow justify-end md:order-2">
      <NavToggle
        on:click={() => {
          settingsMenuIsOpen.update((v) => !v);
        }}
        label="settings"
        menuType="settings"
        iconType={$settingsMenuIsOpen ? "close" : "settings"}
        hideLabel
        expanded={$settingsMenuIsOpen} />
    </div>
  </nav>
  {#if $settingsMenuIsOpen}
    <ul class="px-2 py-1" aria-hidden={!settingsMenuIsOpen}>
      {#each settingsItems as item}
        <ToggleItem on:click={() => item.func()} value={item.value}>
          {item.navigationText}
        </ToggleItem>
      {/each}
    </ul>
  {/if}
</div>
