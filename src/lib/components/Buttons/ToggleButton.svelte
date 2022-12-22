<script>
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";
  import ToggleSwitch from "./ToggleSwitch.svelte";

  /** @type { string } */
  export let label;
  /** @type { string } */
  export let iconClass;
  /** @type { string } */
  export let value;
  /** @type { boolean } */
  export let isActive;
  /** @type { boolean } */
  export let isPending;
  /** @type { boolean } */
  export let useSwitch;
  /** @type { Boolean } */
  export let animateBorders = false;

  let clazz = "";
  export { clazz as class };

  const dispatch = createEventDispatcher();
  function handleClick() {
    dispatch("click", { label, value });
  }

  $: responsiveValue = value;
</script>

<Button
  {animateBorders}
  on:click={handleClick}
  class="my-2 flex items-center justify-end p-3 text-lg {clazz}"
  {iconClass}
  elementProps={{
    "aria-pressed": isPending,
    "aria-label": `${label} ${isActive ? "(applied)" : ""}`,
    value,
    name: "categoryFilter"
  }}>
  <slot />
  {#if useSwitch}
    <ToggleSwitch enabled={responsiveValue} />
  {/if}
</Button>
