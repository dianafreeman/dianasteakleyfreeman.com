<script>
  export let title;
  export let target;
  export let imgSrc;
  
</script>

<a
  href={target}
  class="flex items-center justify-center p-4 relative text-md focus:outline-white focus:outline-1 grayscale aspect-square  hover:bg-white focus:bg-white active:bg-white hover:text-black active:text-black focus:text-black active:outline active:outline-white active:outline-offset-5 text-white flex-col"
>
  <img
    src={imgSrc}
    alt=""
    class="w-full self-start object-contain absolute -z-10 top-0 left-0"
    style="opacity: 0.3;"
  />
  <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold lowercase">{title}.</h3>
</a>
