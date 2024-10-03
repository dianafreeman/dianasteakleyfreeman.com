<script>
  // import SettingsStore from "$stores/SettingsStore";
  import settingsStore, { MODES } from "../../stores/SettingsStore";

  import Button from "./Buttons/Button.svelte";
  import ToggleSwitch from "./Buttons/ToggleSwitch.svelte";

  const settingItemClasses =
    "text-neutral-200 px-4 flex justify-between items-center py-5 text-base font-medium";

  export let expanded;
  export let id;

</script>

<ul class="bg-black py-4 " aria-hidden={!expanded} {id}>
  {#if expanded}
    <li class={settingItemClasses} role="menuitem">
      <button on:click={() => void settingsStore.toggleMode()}>
        dark mode
        <ToggleSwitch enabled={$settingsStore.mode === MODES.DARK} />
      </button>
    </li>
    <li class={settingItemClasses} role="menuitem">
      <button on:click={() => settingsStore.toggleDyslexia()}>
        dyslexia mode
        <ToggleSwitch enabled={$settingsStore.dyslexia} />
      </button>
    </li>
    <li
      class="block px-3 py-5 text-right text-base font-medium text-neutral-300 hover:text-white"
      role="menuitem">
      <Button
        class="inline w-fit p-3 text-right"
        on:click={() => settingsStore.clearSettings()}>
        Clear Settings
      </Button>
    </li>
  {/if}
</ul>
