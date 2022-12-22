<script>
  import { useLazyImage as lazyImage } from "svelte-lazy-image";

  export let src;

  // let imgSrc = 
</script>


<img
use:lazyImage
src={`${src}?nf_resize=20&w=20`}

alt=""
class="absolute left-0 -z-10 h-full w-full self-start object-cover object-center"
/>