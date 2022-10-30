<script>
  import "../app.css";
  import NavBar from "$lib/components/NavBar.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import LayoutStore from "$stores/LayoutStore";
  import { page } from "$app/stores";
  import { error } from "@sveltejs/kit";

  /** @type {import('./$types').LayoutData} */
  export let data;
  const { pageEntries } = data;
  // // console.log(data)
  // const activePageEntry =  pageEntries.find( e => {
  //   return removeTrailingSlash(e.relativePath) === removeTrailingSlash($page.url.pathname)
  // })

  // console.log(pageEntries)
  function isTopLevel(entry) {
    if (!entry.relativePath) error(500, `entry ${entry.title} is missing a relativePath `);
    const pathArray = entry.relativePath.split("/").filter((v) => v.length !== 0);

    if (pathArray.length > 1) return false;
    return true;
  }
  const topLevelRoutes = pageEntries.filter(isTopLevel);
  const navItems = Object.values(topLevelRoutes);
</script>

<header class="w-screen h-100 relative" class:dyslexia={$LayoutStore.dyslexia}>
  <NavBar items={navItems}>
    <Breadcrumbs
      slot="breadcrumbs"
      class="w-full"
      category={$page.params.category}
      subcategory={$page.params.subcategory}
    />
  </NavBar>
</header>
<main class="relative" class:dyslexia={$LayoutStore.dyslexia}>
  <slot />
</main>
