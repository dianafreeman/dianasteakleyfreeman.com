<script>
  export let title;
  export let target;
  export let imgSrc = null;
</script>

<a
  href={target}
  class:border-light-gray={!imgSrc}
  class:border-2={!imgSrc}
  class="block my-3 active:outline-offset-5 hover:bg-gray relative items-center justify-center p-4">
  <h2 class="relative text-2xl lowercase ">{title}</h2>
</a>
