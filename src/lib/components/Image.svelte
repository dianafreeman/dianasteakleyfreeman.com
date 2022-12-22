<script>
  
  import { lazyImage } from "$lib/actions";

  let imagePath;
  export { imagePath as src };
  let clazz;
  export { clazz as class };
  export let darken = false

  let maybeStubbedRoute =  import.meta.env.DEV ? "https://dianasteakleyfreeman.com" : ""
  let fullSrc = `${maybeStubbedRoute}${imagePath}`;

  let placeholderImage = `${fullSrc}?nf_resize=fit&w=50`
  let fullImage = `${fullSrc}?nf_resize=fit&w=700`
 
</script>

{#if darken}
<div class="absolute w-full h-full top-0 left-0" style="background-color: rgba(0,0,0, 0.8)"/>
{/if}
<img
  use:lazyImage={{threshold: 1}}
  src={placeholderImage}
  data-src={fullImage}
  alt=""
  class={clazz}
  />

