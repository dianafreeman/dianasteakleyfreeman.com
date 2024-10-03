<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "../Icon.svelte";

  let clazz = "";
  let wrapper;
  export { clazz as class };

  export let iconProps;
  
  export let elementProps = {};
  /** @type { boolean } */
  export let borders = true;
  /** @type { boolean } */
  export let animateBorders = true;
 /** @type { "button" | "submit" | "a" } */
  export let type = "button";

  const dispatch = createEventDispatcher();

  function handleClick(e) {
    dispatch("click", { value: e.target.value, label: e.target.name });
  }
  function handleMouseEnter(e) {
    dispatch("mouseenter", { value: e.target.value, label: e.target.name });
  }
  function handleMouseLeave(e) {
    dispatch("mouseleave", { value: e.target.value, label: e.target.name });
  }
  function handleFocus(e) {
    dispatch("focus", { value: e.target.value, label: e.target.name });
  }
  function handleBlur(e) {
    dispatch("blur", { value: e.target.value, label: e.target.name });
  }

  const borderClasses = animateBorders
    ? "animate-borders"
    : borders && "borders";

  const defaultClasses = "flex justify-center items-center p-5";
  const classes = `${borderClasses} button`;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
  this={type}
  bind:this={wrapper}
  type={type === "button" ? type : null}
  class="{classes} {clazz || defaultClasses}"
  on:click={handleClick}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:focus={handleFocus}
  on:blur={handleBlur}
  {...elementProps || {}}>
  {#if iconProps}
    <Icon
      type={iconProps.type}
      large={iconProps.large}
      class={iconProps.class} />
  {/if}
  <slot />
</svelte:element>
