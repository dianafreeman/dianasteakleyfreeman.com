<script>
  import "../app.css";
  import NavBar from "$lib/components/NavBar.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import LayoutStore from "$stores/LayoutStore";
    import Seo from "$lib/components/Seo.svelte";


  /** @type {import('./$types').LayoutData} */
  export let data;
  const { navItems, breadcrumbs, seoMeta } = data;


</script>
<Seo title={seoMeta.title} description={seoMeta.description || seoMeta.excerpt || null} />
<header class="w-screen h-100 relative m-auto max-w-md md:max-w-3xl lg:max-w-4xl" class:dyslexia={$LayoutStore.dyslexia}>
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
<main class="relative m-auto max-w-md md:max-w-3xl lg:max-w-4xl" class:dyslexia={$LayoutStore.dyslexia}>
  <slot />
</main>
