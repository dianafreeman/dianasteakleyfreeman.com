<script>
  import { createEventDispatcher } from "svelte";

  let clazz = "";
  let wrapper;
  export { clazz as class };
  export let elementProps = {};
  
  /** @type { Boolean } */
  export let animateBorders = true;

  /** @type { String } */
  export let iconClass = null;

  /** @type { 'button' | 'a' } String */
  export let type = "button";

  const dispatch = createEventDispatcher();

  function handleClick(e) {
    dispatch("click", { event: e });
  }
  function handleMouseEnter(e) {
    dispatch("mouseenter", { event: e });
  }
  function handleMouseLeave(e) {
    dispatch("mouseleave", { event: e });
  }
  function handleFocus(e) {
    dispatch("focus", { event: e });
  }
  function handleBlur(e) {
    dispatch("blur", { event: e });
  }

  const borderClasses = animateBorders
    ? "animate-button-borders"
    : "hover:border-white active:border-white focus:border-white";

  const classes = `${borderClasses} hover:bg-dark-gray active:bg-dark-gray focus:bg-dark-gray relative cursor-pointer w-full text-white flex justify-center items-center `;
</script>

<svelte:element
  this={type}
  bind:this={wrapper}
  class="{classes} {clazz}"
  on:click={handleClick}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:focus={handleFocus}
  on:blur={handleBlur}
  {...elementProps}
>
  {#if iconClass}
    <i aria-hidden="true" class={iconClass} />
  {/if}
  <slot />
</svelte:element>
