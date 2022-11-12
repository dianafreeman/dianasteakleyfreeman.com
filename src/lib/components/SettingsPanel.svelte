<script>
  import LayoutStore from "$stores/LayoutStore";
  import ToggleSwitch from "./Toggles/ToggleSwitch.svelte";

  import Button from "./Button.svelte";

  const settingItemClasses =
    "text-neutral-200 hover:bg-neutral-800 px-4 flex justify-between items-center py-5 text-base font-medium";
</script>

  <ul class="relative flex flex-col w-full justify-center">
    <li class={settingItemClasses} role="menuitem">
      dyslexia mode
      <ToggleSwitch enabled={$LayoutStore.dyslexia} on:click={() => LayoutStore.toggleDyslexia()} />
    </li>
    <li
      class="text-neutral-300 hover:text-white text-right block px-3 py-5 text-base font-medium"
      role="menuitem"
    >
      <Button class="inline p-3 text-right w-fit" on:click={() => LayoutStore.clearSettings()}>
        Clear Settings
      </Button>
    </li>
  </ul>
