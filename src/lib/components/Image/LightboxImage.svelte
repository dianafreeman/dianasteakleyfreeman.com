<script>
  import Modal from "../Modal/Modal.svelte";
  import LazyImage from "./LazyImage.svelte";

  export let image;
</script>

<Modal hideDefaultToggle class="w-full md:w-2/3 lg:w-1/2">
  <LazyImage slot="toggle" src={image.src} alt={image.alt} />
  <figure class="m-auto flex flex-col justify-center">
    <LazyImage lazyThreshold={0.25} src={image.src} alt={image.alt} />
    {#if image.caption}
      <figcaption>
        {image.caption}
      </figcaption>
    {/if}
  </figure>
</Modal>
