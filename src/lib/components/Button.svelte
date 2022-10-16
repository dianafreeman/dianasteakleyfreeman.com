<script>
  import SvgOutline from "./SvgOutline.svelte";
  import SvgUnderline from "./SvgUnderline.svelte";

  let clazz;
  export { clazz as class };
  export let href = "/";
  export let type = "a";
  export let onClick;
  export let underline;
  export let strokeColor;

  let hover = false;
  let wrapper;

  const toggleHover = () => {
    hover = !hover;
  };
  const hoverOn = () => (hover = true);
  const hoverOff = () => (hover = false);

  const classes =
    "inline-block p-5 text-upppercase relative focus:bg-neutral-800 focus:outline-none";

  const linkProps = {
    href
  };
</script>

<svelte:element
  this={type}
  bind:this={wrapper}
  class="{classes} {clazz}"
  on:click={onClick}
  on:mouseenter={toggleHover}
  on:mouseleave={toggleHover}
  on:focus={hoverOn}
  on:blur={hoverOff}
  {...type === "a" ? linkProps : {}}
>
  <slot />
  <div class="-z-50">
    {#if wrapper?.clientWidth}
      {#if underline}
        <SvgUnderline
          active={hover}
          width={wrapper.clientWidth}
          height={wrapper.clientHeight}
          defaultStateLineWidth={10}
          {strokeColor}
        />
      {:else}
        <SvgOutline
          active={hover}
          width={wrapper.clientWidth}
          height={wrapper.clientHeight}
          defaultStateLineWidth={10}
          {strokeColor}
        />
      {/if}
    {/if}
  </div>
</svelte:element>

<style>
  a {
    text-decoration: none;
    cursor: pointer;
  }
</style>
