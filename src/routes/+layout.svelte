<script>
  import "../app.css";
  import NavBar from "$lib/components/NavBar.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import { onMount, beforeUpdate } from "svelte";
  import LayoutStore from "$stores/LayoutStore";
    import { writable } from "svelte/store";
  
  /** @type {import('./$types').LayoutData} */
  export let data;
  const { navItems, breadcrumbs, seoMeta } = data;

  let menuOpen = writable(false)
  let dyslexia = false, mode = false;

  LayoutStore.subscribe( s => {
    if (s && s.dyslexia !== undefined){
      dyslexia = s.dyslexia
    }
    if (s && s.mode !== undefined){
      mode = s.mode
    }
  })

  onMount(() => {
    LayoutStore.restoreSettings()
  })
</script>

<Seo title={seoMeta.title} description={seoMeta.description || seoMeta.excerpt || null} />
<header class="bg-neutral-900 w-screen h-100" class:dyslexia>
  <div class="m-auto max-w-md md:max-w-3xl lg:max-w-4xl">
  <NavBar items={navItems} {menuOpen}>
    <Breadcrumbs
      slot="breadcrumbs"
      class="w-full"
      category={breadcrumbs.category}
      subcategory={breadcrumbs.subcategory}
      activeEntry={breadcrumbs.activeEntry}
    />
  </NavBar>
</div>
</header>
<main class="relative m-auto max-w-md md:max-w-3xl lg:max-w-4xl" class:dyslexia>
  <slot />
</main>
