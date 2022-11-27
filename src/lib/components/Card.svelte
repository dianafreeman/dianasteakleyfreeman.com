<script>
  import { useLazyImage as lazyImage } from "svelte-lazy-image";
  export let title;
  export let target;
  export let imgSrc;
</script>

<a
  href={target}
  class:border-medium-gray={!imgSrc}
  class:border-2={!imgSrc}
  class="text-md active:outline-offset-5 hover:bg-medium-gray relative flex aspect-square max-w-sm flex-col items-center justify-center overflow-hidden p-4 text-white  grayscale hover:outline-white focus:outline focus:outline-white active:outline active:outline-white sm:max-w-md md:max-w-lg"
>
  <img
    use:lazyImage
    data-src={imgSrc}
    alt=""
    aria-hidden={true}
    class="absolute left-0 -z-10 h-full w-full self-start object-cover object-center"
    style="opacity: 0.3;"
  />
  <h3 class="text-3xl font-bold lowercase md:text-4xl">{title}<span aria-hidden="true">.</span></h3>
</a>
