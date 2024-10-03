<script>
  import SettingsStore from "$stores/SettingsStore";

  import NavBrand from "$lib/components/Nav/NavBrand.svelte";
  import NavToggle from "$lib/components/Nav/NavToggle.svelte";
  import ToggleButton from "$lib/components/Buttons/ToggleButton.svelte";
  import MainNav from "./MainNav.svelte";

  import { settingsMenuIsOpen } from "$stores/LayoutStore";

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
  <MainNav items={navItems} />

  {#if $settingsMenuIsOpen}
  <ul class="px-2 py-1">
    {#each settingsItems as item}
      <ToggleButton useSwitch on:click={() => item.func()} value={item.value}>
        {item.label}
      </ToggleButton>
    {/each}
  </ul>
  {/if}
</div>
