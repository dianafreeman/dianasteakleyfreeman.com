<script>
  import Modal from "./Modal/Modal.svelte";
  import Image from "./Image.svelte";

  export let image;
</script>

<Modal useCustomToggle class="w-full md:w-2/3 lg:w-1/2">
  <Image slot="toggle" src={image.src} alt={image.alt} />
  <figure class="m-auto flex flex-col justify-center">
    <Image lazyThreshold={0.25} src={image.src} alt={image.alt} />
    {#if image.caption}
      <figcaption>
        {image.caption}
      </figcaption>
    {/if}
  </figure>
</Modal>
