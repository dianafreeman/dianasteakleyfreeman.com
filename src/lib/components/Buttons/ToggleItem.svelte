<script>
  import Button from "./Button.svelte";
  import ToggleSwitch from "./ToggleSwitch.svelte";

  /** @type {boolean} */
  export let value;

  $: responsiveValue = value;
</script>

<Button on:click class="flex w-full items-center justify-between p-4">
  <slot />
  <ToggleSwitch enabled={responsiveValue} />
</Button>
