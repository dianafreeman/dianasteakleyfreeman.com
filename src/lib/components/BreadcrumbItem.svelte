<script>
  import NavLink from "./NavLink.svelte";
  import Slash from "./Slash.svelte";
  import Home from "$lib/icons/home.svelte";

  export let item;
  export let current = false;

  let itemProps = current ? { "aria-current": "page" } : {};

  let isHomePageCrumb = item.relativePath === "/";
</script>

<!-- <li {...itemProps}> -->
<div class="flex items-center">
  {#if isHomePageCrumb}
    <NavLink href="/" class="text-gray-400 hover:text-white">
    <Home />
    <span class="sr-only">Home Page</span>
    </NavLink>
  {:else}
    <Slash />
    {#if current}
      <p class="w-[33vw] whitespace-nowrap overflow-hidden overflow-ellipsis md:w-full">
        {item.navigationText || item.title}
      </p>
    {:else}
      <NavLink
        href={item.relativePath}
        class="ml-4 text-base font-thin text-gray-300 underline underline-offset-4 hover:text-white"
        >{item.navigationText || item.title}</NavLink
      >
    {/if}
  {/if}
</div>

