<script>
  import ImageWithCaption from "../Image/ImageWithCaption.svelte";
  import LightboxImage from "../Image/LightboxImage.svelte";

  export let images;
  export let lightbox = false;
  if (!images || !images?.length)
    throw new Error(
      'Attempted to instantiate component "Gallery" without an array of images.'
    );
</script>

<div class="grid grid-cols-2 md:grid-cols-3">
  {#each images as image}
    {#if lightbox}
      <LightboxImage {image} />
    {:else}
      <ImageWithCaption {...image} />
    {/if}
  {/each}
</div>
