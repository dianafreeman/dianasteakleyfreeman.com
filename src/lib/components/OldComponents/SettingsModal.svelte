<script>
  import Modal from "./Modal.svelte";
  import settingsStore, { MODES } from "$stores/SettingsStore";

  import Button from "../Buttons/Button.svelte";
  import ToggleSwitch from "../Buttons/ToggleSwitch.svelte";

  export let navItemClasses;
  export let isOpen;
  export let id;
  export let onCloseClick;

</script>

<Modal
  {isOpen}
  id={id}
  title="Settings"
  on:closeClicked={onCloseClick}>
  <li>
    <Button
      on:click={() => settingsStore.toggleMode()}
      class={`${navItemClasses} w-full`}>
      <span class="my-auto">dark mode</span>
      <ToggleSwitch enabled={$settingsStore.mode === MODES.DARK} />
    </Button>
  </li>
  <li>
    <Button
      on:click={() => settingsStore.toggleDyslexia()}
      class={`${navItemClasses} w-full`}>
      <span class="my-auto">dyslexia mode</span>
      <ToggleSwitch enabled={$settingsStore.dyslexia} />
    </Button>
  </li>
  <li class="block px-3 py-5 text-right text-base font-medium text-neutral-300 hover:text-white">
    <Button
      class="inline w-fit p-3 text-right"
      on:click={() => settingsStore.clearSettings()}>
      Clear Settings
    </Button>
  </li>
</Modal>
