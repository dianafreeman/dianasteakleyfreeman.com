<script>

  export let title;
  // export let description;
  export let target;
  export let imgSrc;
</script>

<a href={target} class="inline-block text-md font-bold p-3 focus:outline-white focus:outline-1">
  <img src={imgSrc} alt="caption descripton" class="w-full self-start" />
  <span class="block my-3">{title}</span>
</a>
