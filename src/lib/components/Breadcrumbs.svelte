<script>
  import { page } from "$app/stores";
  import BreadcrumbItem from "./BreadcrumbItem.svelte";
  import Slash from "./Slash.svelte";
  import NavLink from "./NavLink.svelte";
  import { getPageEntries } from "$lib/content/queries";

  let clazz;
  export { clazz as class };
  export let items;
</script>

<nav class:hidden={$page.url.pathname === "/"} class=" relative {clazz}" aria-label="Breadcrumb">
  <ol class="list-none flex mx-1">
    {#each items as item}
      <BreadcrumbItem current={item.relativePath === $page.url.pathname} {item} />
    {/each}
  </ol>
</nav>
