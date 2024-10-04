<script>
  import "../app.css";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import SettingsStore from "$stores/SettingsStore";
  import Seo from "$lib/components/Seo.svelte";
  import MainNav from "$lib/components/Nav/MainNav.svelte";
  import { isMobileScreen } from "$stores/LayoutStore";
  import TopNav from "$lib/components/Nav/NavBar.svelte";
  import FooterNav from "$lib/components/Footer.svelte";
  import GoogleAnalytics from "$lib/components/GoogleAnalytics.svelte";
  import Section from "$lib/components/Section.svelte";

  /** @type {import('./$types').LayoutData} */

  let body;
  let width;
  let dyslexia;

  // Restore any user settings
  onMount(async () => {
    SettingsStore.restoreSettings();
  });

  // Add the observer when component mounts and cleanup after
  onMount(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      // We're only watching one element
      const entry = entries.at(0);
      width = entry.contentRect.width;
      if (width < 768) {
        isMobileScreen.set(true);
      } else {
        isMobileScreen.set(false);
      }
    });
    resizeObserver.observe(body);

    // This callback cleans up the observer
    return () => resizeObserver.unobserve(body);
  });
</script>

<!-- <Seo /> -->
<!-- <GoogleAnalytics /> -->

<body bind:this={body} class="block bg-black">
  <header>
    <MainNav
      items={[
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Contact", url: "/contact" }
      ]} />
  </header>
  <main class:dyslexia in:fade class="flex flex-grow flex-col">
    <Section class="h-screen flex align-middle">
      <slot />
    </Section>
  </main>
  <footer>
    <FooterNav />
  </footer>
</body>
