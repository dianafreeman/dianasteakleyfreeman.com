<script>
  import Slash from "./Slash.svelte";
  import Home from "$lib/icons/home.svelte";

  export let item;
  export let current = false;

  let itemProps = current ? { "aria-current": "page" } : {};

  $: isHomePageCrumb = item.relativePath === "/";
</script>

<div class="flex items-center">
  {#if isHomePageCrumb}
    <a href="/" class="text-gray-400 hover:text-white">
      <Home />
      <span class="sr-only">Home Page</span>
    </a>
  {:else}
    <Slash />
    <a
      href={item.relativePath}
      class:underline={!current}
      class:font-medium={current}
      class="ml-4 text-base font-thin text-gray-300 underline underline-offset-4 rounded-sm focus:outline focus:outline-white focus:outline-offset-8 focus:outline-1"
      {...itemProps}>{item.navigationText || item.title}</a
    >
  {/if}
</div>
