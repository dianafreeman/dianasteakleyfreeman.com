<script>
  import LightboxImage from "./LightboxImage.svelte";

  export let images;
</script>

<div class="grid grid-cols-2 md:grid-cols-3">
  {#each images as image}
    <LightboxImage {image} />
  {/each}
</div>
