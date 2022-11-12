<script>
  import "../app.css";
  import NavToggle from "$lib/components/NavToggle.svelte";
  import NavBrand from "$lib/components/NavBrand.svelte";

  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import { onDestroy, onMount } from "svelte";
  import LayoutStore from "$stores/LayoutStore";
  import { writable } from "svelte/store";
  import MainNav from "$lib/components/MainNav.svelte";
  import { browser } from "$app/environment";
  import createTrapFocus from "$lib/trapFocus";
  // import TrapFocus from "$lib/components/TrapFocus.svelte";

  /** @type {import('./$types').LayoutData} */
  export let data;
  let scrollY, trapFocusWapper;

  let menuOpen = writable(false);

  let dyslexia, mode;
  $: {
    if (browser && $LayoutStore) {
      console.log();
      dyslexia = $LayoutStore.dyslexia;
      mode = $LayoutStore.mode;
    }
  }

  onMount(() => {
    LayoutStore.restoreSettings();
  });

  const navWrapperClassesClosed = "h-0";
  const navWrapperClassesOpen = "top-0 h-screen";

  const toggleMenu = () => menuOpen.update((bool) => !bool);

  onMount(() => {
    const trapFocus = createTrapFocus(menuOpen);
    if (trapFocusWapper) {
      trapFocusWapper.addEventListener("keydown", (e) => trapFocus(e, trapFocusWapper));
    }
  });
  onDestroy(() => {
    if (trapFocusWapper) {
      trapFocusWapper.removeEventListener("keydown", (e) => trapFocus(e, trapFocusWapper), true);
    }
  });
</script>

<svelte:window bind:scrollY />
<Seo
  title={data.seoData?.title}
  description={data.seoData?.description || data.seoData?.excerpt || null}
/>
<header
  class="relative w-auto pb-4 inset-0 z-50 max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto bg-neutral-900"
  class:dyslexia
>
  <div
    bind:this={trapFocusWapper}
    style="transform: translateY({scrollY}px);"
    class=" w-inherit left-0 right-0 w-full mx-auto bg-neutral-900 h-full {$menuOpen
      ? navWrapperClassesOpen
      : navWrapperClassesClosed}"
  >
    <div class="m-auto h-fit bg-neutral-900 flex justify-between {$menuOpen ? '' : ''}">
      <!-- Top Bar -- Nav Brand and Menu Toggle -->
      <NavBrand />
      <NavToggle
        onClick={toggleMenu}
        buttonProps={{
          "aria-pressed": $menuOpen,
          "aria-controls": "#main-menu",
          "aria-label": "Show Navigation"
        }}
      >
        {#if $menuOpen}
          <i class="text-3xl las la-times" aria-hidden="true" />
        {:else}
          <i class="text-3xl las la-bars" aria-hidden="true" />
        {/if}
      </NavToggle>
      <!-- </TrapFocus> -->
      <!-- END Top Bar -->
    </div>

    <MainNav items={data.navItems} {menuOpen} />

    <Breadcrumbs
      slot="breadcrumbs"
      class="w-full m-auto {$menuOpen ? 'order-3' : ''}"
      items={data.breadcrumbs}
    />
  </div>
</header>
<main
  class="relative m-auto max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl {$menuOpen
    ? 'h-screen overflow-hidden'
    : ' '}"
  class:dyslexia
>
  <slot />
</main>
