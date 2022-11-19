<script>
  import { page } from "$app/stores";
  import BreadcrumbItem from "./BreadcrumbItem.svelte";
  import NavLink from "./NavLink.svelte";
  import { getPageEntries } from "$lib/content/queries";

  let clazz;
  let wrapper;
  export { clazz as class };
  export let items;

  const DISABLED_PAGES = ["/", "/admin"];

</script>

{#if !DISABLED_PAGES.includes($page.url.pathname)}
  <nav
    class="px-4 relative bg-medium-gray py-2 {clazz}"
    aria-label="Breadcrumb"
  >
    <ol class="list-none flex gap-2 mx-1">
      {#each items as item}
        <BreadcrumbItem current={item.relativePath === $page.url.pathname} {item} />
      {/each}
    </ol>
  </nav>
{/if}
