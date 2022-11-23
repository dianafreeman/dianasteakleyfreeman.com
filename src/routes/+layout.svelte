<script>
  import "../app.css";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import { onMount } from "svelte";
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
      mainMenuIsOpen.set(true)
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
<body class="flex min-h-screen flex-col justify-between bg-black">
  <header
    bind:clientHeight={headerHeight}
    class="fixed top-0 z-30 w-full bg-darkest-gray pb-4"
    class:dyslexia
  >
    <TopNav navItems={data.navItems} />
    <Breadcrumbs slot="breadcrumbs" class="z-40 m-auto w-full" items={data.breadcrumbs} />
  </header>
  <div id="spacer" style="height: {headerHeight}px" />

  <main class:dyslexia bind:this={main} transition:fade>
    <slot />
  </main>
  <footer bind:this={footer} class="w-full bg-darkest-gray p-5" class:dyslexia>
    <FooterNav />
  </footer>
</body>
