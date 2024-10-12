<script>
  import { focusTrap } from "$lib/actions/focusTrap";

  import settingsStore, { MODES } from "$stores/SettingsStore";

  import Button from "../Buttons/Button.svelte";
  import ToggleSwitch from "../Buttons/ToggleSwitch.svelte";

  export let navItemClasses;
  export let isOpen;
  export let id;
  export let onCloseClick;
</script>

<ul
  use:focusTrap={isOpen}
  class="list-none bg-darkest-gray md:absolute md:top-full md:z-50 md:w-[35vw]"
  {id}>
  {#if isOpen}
    <li>
      <Button
        on:click={() => settingsStore.toggleMode()}
        class={`${navItemClasses} w-full `}>
        <span class="my-auto">dark mode</span>
        <ToggleSwitch enabled={$settingsStore.mode === MODES.DARK} />
      </Button>
    </li>
    <li>
      <Button
        on:click={() => settingsStore.toggleDyslexia()}
        class={`${navItemClasses}  w-full`}>
        <span class="my-auto">dyslexia mode</span>
        <ToggleSwitch enabled={$settingsStore.dyslexia} />
      </Button>
    </li>
    <li
      class="block px-3 py-5 text-right text-base font-medium text-neutral-300 hover:text-white">
      <Button
        class="inline w-fit p-3 text-right"
        on:click={() => settingsStore.clearSettings()}>
        Clear Settings
      </Button>
    </li>
    <li
      class="block px-3 py-5 text-right text-base font-medium text-neutral-300 hover:text-white">
      <Button class="inline w-fit p-3 text-right" on:click={onCloseClick}>
        <span>Close</span>
      </Button>
    </li>
  {/if}
</ul>
