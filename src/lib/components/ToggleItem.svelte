<script>
    import Button from "./Button.svelte";
  import ToggleSwitch from "./Toggles/ToggleSwitch.svelte";

  
  export let value;

  $: responsiveValue = value
  $: console.log(value)
  
</script>

<Button on:click class="w-full flex justify-between p-4 items-center">
  <slot />
  <ToggleSwitch enabled={responsiveValue} />
</Button>
