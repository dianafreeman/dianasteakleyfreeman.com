<script>
  import { createEventDispatcher } from "svelte";

  import Icon from "../Icon.svelte";

  let clazz = "";
  export { clazz as class };

  export let href;
  export let iconProps;
  export let borders = true;
  export let animateBorders = true;

  const borderClasses = animateBorders
    ? "animate-borders"
    : borders && "borders";

  const classes = `${borderClasses} cursor-pointer`;
  const dispatch = createEventDispatcher();

  function handleClick(e) {
    dispatch("click", { value: e.target.value, label: e.target.name });
  }
</script>

<a
  {href}
  class="{classes} {clazz}"
  on:click={handleClick}
  {...$$restProps}>
  {#if iconProps}
    <Icon
      type={iconProps.type}
      large={iconProps.large}
      class={iconProps.class} />
  {/if}
  <slot />
</a>
