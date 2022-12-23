<script>
  import { page } from "$app/stores";
  import { lazyImage } from "$lib/actions";

  let imagePath;
  export { imagePath as src };
  let clazz;
  export { clazz as class };
  export let darken = false;
  export let lazyThreshold = 1;

  const IMAGE_HOST = "https://dianasteakleyfreeman.com"

  let imageRoot = $page.url.origin !== IMAGE_HOST
    ? IMAGE_HOST
    : "";
  let fullSrc = `${imageRoot}${imagePath}`;

  let placeholderImage = `${fullSrc}?nf_resize=fit&w=50`;
  let fullImage = `${fullSrc}?nf_resize=fit&w=700`;
</script>

{#if darken}
  <div
    class="absolute top-0 left-0 h-full w-full"
    style="background-color: rgba(0,0,0, 0.8)" />
{/if}
<img
  use:lazyImage={{ threshold: lazyThreshold }}
  src={placeholderImage}
  data-src={fullImage}
  alt=""
  class={clazz} />
