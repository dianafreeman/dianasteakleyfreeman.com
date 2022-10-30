<script>
    import NavLink from "./NavLink.svelte";

  export let title;
  // export let description;
  export let target;
  export let imgSrc;
</script>

<NavLink href={target} class="text-md font-bold p-3">
  <img src={imgSrc} alt="caption descripton" class="w-full" />
  <span class="block my-3">{title}</span>
</NavLink>
