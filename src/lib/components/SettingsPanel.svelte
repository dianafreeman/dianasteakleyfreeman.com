<script>
  import SettingsStore from "$stores/SettingsStore";

  import Button from "./Buttons/Button.svelte";

  const settingItemClasses =
    "text-neutral-200 px-4 flex justify-between items-center py-5 text-base font-medium";

  export let expanded;
  export let id;
</script>

<ul class="absolute w-fit bg-black py-4 lg:w-1/3" aria-hidden={!expanded} {id}>
  {#if expanded}
    <li class={settingItemClasses} role="menuitem">
      <!-- <button on:click={() => SettingsStore.toggleMode()}>
        dark mode
        <ToggleSwitch enabled={$SettingsStore.darkMode} />
      </button> -->
    </li>
    <li class={settingItemClasses} role="menuitem">
      <!-- <button on:click={() => SettingsStore.toggleDyslexia()}>
        dyslexia mode
        <ToggleSwitch enabled={$SettingsStore.dyslexia} />
      </button> -->
    </li>
    <li
      class="block px-3 py-5 text-right text-base font-medium text-neutral-300 hover:text-white"
      role="menuitem">
      <Button
        class="inline w-fit p-3 text-right"
        on:click={() => SettingsStore.clearSettings()}>
        Clear Settings
      </Button>
    </li>
  {/if}
</ul>
