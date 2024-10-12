<script>
  import "../app.css";
  import SettingsStore from "$stores/SettingsStore";
  import Seo from "$lib/components/Seo.svelte";
  import MainNav from "$lib/components/TopNav/MainNav.svelte";
  import { isMobileScreen } from "$stores/LayoutStore";
  import FooterNav from "$lib/components/Footer.svelte";
  import GoogleAnalytics from "$lib/components/GoogleAnalytics.svelte";
  import Section from "$lib/components/Section.svelte";
  import { onMount, onDestroy } from "svelte";
  import { initializeMobileCheck } from "$stores/isMobile";

  /** @type {import('./$types').LayoutData} */

  let body;

  let dyslexia;

  onMount(async () => {
    SettingsStore.restoreSettings();
  });

  initializeMobileCheck();

</script>

<!-- <Seo /> -->
<!-- <GoogleAnalytics /> -->

<body bind:this={body} class="block bg-black">
  <header>
   <MainNav
      items={[
        { label: "about", url: "/about" },
        { label: "contact", url: "/contact" }
     ]} />
  </header>
  <main class:dyslexia>
    <Section class="py-10">
      <slot />
    </Section>
  </main>
  <footer class="flex flex-row flex-wrap justify-between bg-darkest-gray p-5 mt-5 ">
    <FooterNav />
  </footer>
</body>
