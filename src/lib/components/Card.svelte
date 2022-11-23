<script>
  export let title;
  export let target;
  export let imgSrc;
</script>

<a
  href={target}
  class="text-md active:outline-offset-5 relative flex aspect-square flex-col items-center justify-center p-4 text-white  grayscale hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-1 focus:outline-white active:bg-white active:text-black active:outline active:outline-white"
>
  <img
    src={imgSrc}
    alt=""
    class="absolute top-0 left-0 -z-10 w-full self-start object-contain"
    style="opacity: 0.3;"
  />
  <h3 class="text-3xl font-bold lowercase md:text-4xl lg:text-5xl">{title}.</h3>
</a>
