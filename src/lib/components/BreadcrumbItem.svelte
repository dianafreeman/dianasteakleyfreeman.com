<script>
    import NavLink from "./NavLink.svelte";
    import Slash from "./Slash.svelte";
    
    export let item
    export let current = false

    let itemProps = current ? {"aria-current": "page"} : {}
</script>

<li {...itemProps}>
  <div class="flex items-center">
    <Slash />
    {#if current}
      <p>{item.name}</p>
    {:else}
    <NavLink
      href={item.relativePath}
      class="ml-4 text-base font-thin text-gray-300 underline underline-offset-4 hover:text-white"
      >{item.name}</NavLink>
      {/if}
  </div>
</li>
