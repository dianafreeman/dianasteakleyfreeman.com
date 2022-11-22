<script>
  import "../app.css";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import { onDestroy, onMount } from "svelte";
  import SettingsStore from "$stores/SettingsStore";
  import Seo from "$lib/components/Seo.svelte";
  // import createTrapFocus from "$lib/trapFocus";
  import { mainMenuIsOpen, settingsMenuIsOpen, isMobileScreen } from "$stores/LayoutStore";
  import TopNav from "$lib/components/TopNav.svelte";
  import FooterNav from "$lib/components/FooterNav.svelte";

  /** @type {import('./$types').LayoutData} */
  export let data;

  let main;
  let footer;
  let dyslexia;
  let mode;
  let headerHeight;
  let scrollY;
  let innerWidth;

  $: {
    if (browser) {
      dyslexia = $SettingsStore.dyslexia;
      mode = $SettingsStore.mode;
    }
  }

  // Close navigation menu when the page changes
  page.subscribe((p) => {
    if (p.url.pathname) {
      mainMenuIsOpen.set(false);
      settingsMenuIsOpen.set(false);
    }
  });

  $: {
    if (innerWidth > 640) {
      isMobileScreen.set(false);
    } else {
      isMobileScreen.set(true);
    }
  }
  // Restore any user settings
  onMount(() => {
    SettingsStore.restoreSettings();
  });
</script>

<svelte:window bind:scrollY bind:innerWidth />

<Seo
  title={data.seoMeta?.title}
  description={data.seoMeta?.description || data.seoMeta?.excerpt || null}
/>
<header
  bind:clientHeight={headerHeight}
  class="fixed w-full top-0 pb-4 z-30 bg-darkest-gray"
  class:dyslexia
>
  <TopNav navItems={data.navItems} />
  <Breadcrumbs slot="breadcrumbs" class="w-full m-auto z-40" items={data.breadcrumbs} />
</header>
<div style="height: {headerHeight}px" />

<body class="bg-black min-h-screen flex-col flex ">
  <main class:dyslexia bind:this={main} transition:fade>
    <slot />
  </main>
  <footer bind:this={footer} class=" bg-darkest-gray p-5 w-full" class:dyslexia>
    <FooterNav />
  </footer>
</body>
