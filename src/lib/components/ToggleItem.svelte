<script>
  import Button from "./Button.svelte";
  import ToggleSwitch from "./Toggles/ToggleSwitch.svelte";

  export let value;

  $: responsiveValue = value;
  $: console.log(value);
</script>

<Button on:click class="flex w-full items-center justify-between p-4">
  <slot />
  <ToggleSwitch enabled={responsiveValue} />
</Button>
