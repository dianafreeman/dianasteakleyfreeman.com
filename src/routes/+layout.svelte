<script>
  import "../app.css";
  import NavBar from "$lib/components/NavBar.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import LayoutStore from "$stores/LayoutStore";
  import { page } from "$app/stores";
  import { error } from "@sveltejs/kit";

  /** @type {import('./$types').LayoutData} */
  export let data;
  const { navItems, breadcrumbs } = data;

// console.log(breadcrumbs)
</script>

<header class="w-screen h-100 relative" class:dyslexia={$LayoutStore.dyslexia}>
  <NavBar items={navItems}>
    <Breadcrumbs
      slot="breadcrumbs"
      class="w-full"
      category={breadcrumbs.category}
      subcategory={breadcrumbs.subcategory}
      activeEntry={breadcrumbs.activeEntry}
      
    />
  </NavBar>
</header>
<main class="relative" class:dyslexia={$LayoutStore.dyslexia}>
  <slot />
</main>
