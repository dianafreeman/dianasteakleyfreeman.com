<script>
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";
  import Icon from "../Icon.svelte";
  import ToggleSwitch from "./ToggleSwitch.svelte";

  /** @type { Object } icon properties*/
  export let iconProps;
  /** @type { string } */
  export let id = null;
  /** @type { string } */
  export let label;
  /** @type { string } */
  export let value;
  /** @type { boolean } */
  export let useSwitch;

  let pressed = false;
  let clazz;

  export { clazz as class };

  const dispatch = createEventDispatcher();

  function handleClick() {
    pressed = !pressed;
    dispatch("click", { label, value });
  }

  $: elementProps = {
    "aria-pressed": pressed,
    value: pressed,
    name: id,
    id
  };
</script>

<Button
  class="my-2 flex items-center justify-between p-3 text-lg {clazz}"
  on:click={handleClick}
  {elementProps}>
  <div class={iconProps ? "flex justify-end items-center gap-2" : null}>
    {#if iconProps}
      <Icon type={iconProps.type} large={iconProps.large} />
    {/if}
    <slot />
  </div>
  {#if useSwitch}
    <ToggleSwitch enabled={pressed} />
  {/if}
</Button>
