<script>
  import { page } from "$app/stores";
  import { lazyImage } from "$lib/actions";
  import lazyImageSource from "../../lazyImageSource";

  let clazz;
  export let src;
  export let darken = false;
  export let lazyThreshold = 1;
  export { clazz as class };

  const { image, placeholderImage } = lazyImageSource(src, $page);
</script>

{#if darken}
  <div
    class="absolute top-0 left-0 h-full w-full"
    style="background-color: rgba(0,0,0, 0.8)" />
{/if}
<img
  use:lazyImage={{ threshold: lazyThreshold }}
  src={placeholderImage}
  data-src={image}
  alt=""
  class={clazz} />
