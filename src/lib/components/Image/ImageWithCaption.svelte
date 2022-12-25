<script>
  import LazyImage from "./LazyImage.svelte";

  export let src;
  export let alt;
  export let caption;
</script>

<figure class="m-2">
  <LazyImage lazyThreshold={0.25} src={src} alt={alt} />
  {#if caption}
    <figcaption>
      {caption}
    </figcaption>
  {/if}
</figure>
