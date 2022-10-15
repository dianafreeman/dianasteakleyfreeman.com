<script>
  import SvgOutline from "./SvgOutline.svelte";

  export let href = "/";
  let hover = false;
  let wrapper;

  const toggleHover = () => {
   hover = !hover;
  }
</script>

<a
  bind:this={wrapper}
  class="inline-block p-5 text-upppercase mb-10 relative text-center focus:bg-neutral-800 focus:outline-none"
  {href}
  on:mouseenter={toggleHover}
  on:focus={toggleHover}
  on:blur={toggleHover}
  on:mouseleave={toggleHover}
>
  Button
  {#if wrapper?.clientWidth}
    <SvgOutline active={hover} width={wrapper.clientWidth} height={wrapper.clientHeight} defaultStateLineWidth={10}/>
  {/if}
</a>

<style>
  a {
    text-decoration: none;
    cursor: pointer;
  }
</style>
