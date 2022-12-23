<script>
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";
  import ToggleSwitch from "./ToggleSwitch.svelte";

  /** @type { string } */
  export let label;
  /** @type { string } */
  export let iconClasses;
  /** @type { string } */
  export let value;
  /** @type { boolean } */
  export let isPending;
  /** @type { boolean } */
  export let useSwitch;
  /** @type { boolean } */
  export let animateBorders = false;

  let clazz = "";
  export { clazz as class };

  const dispatch = createEventDispatcher();
  function handleClick() {
    dispatch("click", { label, value });
  }

  $: elementProps = {
    "aria-pressed": isPending,
    "aria-label": label,
    value,
    name: "categoryFilter"
  };

  $: responsiveValue = value;
</script>

<Button
  class="my-2 flex items-center justify-end p-3 text-lg {clazz}"
  {animateBorders}
  on:click={handleClick}
  {iconClasses}
  {elementProps}>
  <slot />
  {#if useSwitch}
    <ToggleSwitch enabled={responsiveValue} />
  {/if}
</Button>
