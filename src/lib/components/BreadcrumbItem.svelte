<script>
  import Home from "$lib/icons/home.svelte";

  export let item;
  export let current = false;

  let itemProps = current ? { "aria-current": "page" } : {};

  $: isHomePageCrumb = item.relativePath === "/";
</script>

<li class="flex items-center ">
  {#if isHomePageCrumb}
    <a href="/" class="text-white hover:text-white">
      <Home />
      <span class="sr-only">Home Page</span>
    </a>
  {:else}
    <i aria-hidden="true" class="las la-angle-right mr-2 text-white " />

    <a
      aria-current={current}
      href={item.relativePath}
      class:underline={!current}
      class:font-medium={current}
      class="text-base font-thin text-white underline underline-offset-4 rounded-sm focus:outline focus:outline-white focus:outline-offset-8 focus:outline-1"
      {...itemProps}
    >
      {item.navigationText || item.title}</a
    >
  {/if}
</li>
