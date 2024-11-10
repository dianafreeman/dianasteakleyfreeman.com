<script>
  import "../app.css";
  import Seo from "$lib/components/Seo.svelte";
  import MainNav from "$lib/components/TopNav/MainNav.svelte";
  import FooterNav from "$lib/components/Footer.svelte";
  import GoogleAnalytics from "$lib/components/GoogleAnalytics.svelte";
  import Section from "$lib/components/Section.svelte";
  import { initializeMobileCheck } from "$stores/isMobile";

  /** @type {import('./$types').LayoutData} */

  initializeMobileCheck();

</script>

<!-- <Seo /> -->
<!-- <GoogleAnalytics /> -->

<body class="block bg-black">
  <header>
   <MainNav
      items={[
        { label: "about", url: "/about" },
        { label: "contact", url: "/contact" }
     ]} />
  </header>
  <main>
    <Section class="py-10">
      <slot />
    </Section>
  </main>
  <footer class="flex flex-row flex-wrap justify-between bg-darkest-gray p-5 mt-5 ">
    <FooterNav />

    <!-- TODO: settings panel management -->
    <!-- <SettingsModal id="settingsPanel" onCloseClick={() => settingsMenuIsOpen.set(false)} isOpen={$settingsMenuIsOpen} {navItemClasses} /> -->
  
    </footer>
</body>
