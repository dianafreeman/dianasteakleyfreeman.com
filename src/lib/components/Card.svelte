<script>

  export let title;
  
  export let target;
  export let imgSrc;
</script>

<a href={target} class="flex p-4 relative text-md focus:outline-white focus:outline-1 grayscale hover:grayscale-0 aspect-square bg-light-gray hover:bg-white focus:bg-white active:bg-white active:outline active:outline-white active:outline-offset-5 text-black justify-end flex-col">
  <!-- <img src={imgSrc} alt="" class="w-full self-start object-contain" /> -->
  <!-- <div class="bottom-0 absolute w-full p-3" style="background-color: rgba(0,0,0,0.9);"> -->
  <h3 class="text-xl font-bold lowercase">{title}.</h3>
<!-- </div> -->

</a>
