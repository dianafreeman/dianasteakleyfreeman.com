<script>
  import { page } from "$app/stores";
  import BreadcrumbItem from "./BreadcrumbItem.svelte";

  let clazz;
  export { clazz as class };
  export let items;

  const DISABLED_PAGES = ["/", "/admin"];
</script>

{#if !DISABLED_PAGES.includes($page.url.pathname)}
  <nav class="relative px-4 py-2 {clazz}" aria-label="Breadcrumb">
    <ol class="mx-1 flex list-none gap-2">
      {#each items as item}
        <BreadcrumbItem current={item.relativePath === $page.url.pathname} {item} />
      {/each}
    </ol>
  </nav>
{/if}
