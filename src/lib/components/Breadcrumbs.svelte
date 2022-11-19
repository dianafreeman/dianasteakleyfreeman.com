<script>
  import { page } from "$app/stores";
  import BreadcrumbItem from "./BreadcrumbItem.svelte";
  import Slash from "./Slash.svelte";
  import NavLink from "./NavLink.svelte";
  import { getPageEntries } from "$lib/content/queries";

  let clazz;
  export { clazz as class };
  export let items;

  const DISABLED_PAGES = ["/", "/admin"]
</script>
{#if !DISABLED_PAGES.includes($page.url.pathname)}
<nav  class="px-4 relative {clazz}" aria-label="Breadcrumb">
  <ol class="list-none flex mx-1">
    {#each items as item}
      <BreadcrumbItem current={item.relativePath === $page.url.pathname} {item} />
    {/each}
  </ol>
</nav>
{/if}