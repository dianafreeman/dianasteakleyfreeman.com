<script>
  import "../app.css";
  import NavBar from "$lib/components/Nav/NavBar.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import LayoutStore from "$stores/LayoutStore";
  import { page } from "$app/stores";


  /** @type {import('./$types').LayoutData} */
  export let data;
  const { routes } = data;

  let category, subcategory, active; // export let active;

  page.subscribe(({url}) => {
    // TODO: create 
    let urlData = url.pathname.split("/").filter(v => v.length)
    category = urlData[0]
    active = urlData[urlData.length - 1]
  })
</script>

<header class="w-screen h-100 relative" class:dyslexia={$LayoutStore.dyslexia}>
  <NavBar items={routes}>
    <Breadcrumbs
      slot="breadcrumbs"
      class="w-full"
      category={category}
      subcategory={subcategory}
      active={active}
    />
  </NavBar>
</header>
<main class="relative" class:dyslexia={$LayoutStore.dyslexia}>
  <slot />
</main>
