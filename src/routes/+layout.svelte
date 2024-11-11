<script>
  import "../app.css";
  import Seo from "$lib/components/Seo.svelte";
  import MainNav from "$lib/components/TopNav/MainNav.svelte";
  import FooterNav from "$lib/components/Footer.svelte";
  import GoogleAnalytics from "$lib/components/GoogleAnalytics.svelte";
  import { initializeMobileCheck } from "$stores/isMobile";

  /** @type {import('./$types').LayoutData} */

  initializeMobileCheck();


</script>

<!-- <Seo /> -->
<!-- <GoogleAnalytics /> -->

  <header>
   <MainNav
      items={[
        { label: "projects", url: "/projects" },
        { label: "blog", url: "/blog" },
        { label: "resources", url: "/resources" },
        { label: "about", url: "/about" },
     ]} />
  </header>
  <main>
      <slot />
  </main>
  <footer class="flex flex-row flex-wrap justify-between border-t border-dark-gray p-5 mt-5 ">
    <FooterNav />

    <!-- TODO: settings panel management -->
    <!-- <SettingsModal id="settingsPanel" onCloseClick={() => settingsMenuIsOpen.set(false)} isOpen={$settingsMenuIsOpen} {navItemClasses} /> -->
  
    </footer>
