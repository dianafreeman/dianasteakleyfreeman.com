<script>
  import { page } from "$app/stores";
  import NavLink from "./NavLink.svelte";
  import SettingsPanel from "$lib/components/SettingsPanel.svelte";
  import MenuToggle from "./MenuToggle.svelte";
  import MenuContent from "./MenuContent.svelte";
  import LayoutStore from "$stores/LayoutStore";

  export let items;
  export let menuOpen;

  const navLinkClasses =
    "text-neutral-200 focus:bg-medium-gray focus:outline-white hover:bg-medium-gray px-4 block py-5 text-base font-medium text-right";

  $: $page.url.pathname && menuOpen.set(false);

  let mainMenuExpanded = false;
  let settingsMenuExpanded = false;

  console.log(LayoutStore)
  $: settingsItems = [
    {
      func: LayoutStore.toggleDyslexia,
      value: $LayoutStore.dyslexia,
      displayText: "dyslexia mode"
    }
  ];
</script>

<!-- <div class="overflow-x-hidden overflow-y-scroll h-screen"> -->
<!-- <div class="relative flex flex-row"> -->
  <MenuToggle
    on:click={() => (mainMenuExpanded = !mainMenuExpanded)}
    label="menu"
    menuType="hamburger"
    id="mainMenu"
    hideLabel
    expanded={mainMenuExpanded}
  />
  <MenuToggle
    on:click={() => (settingsMenuExpanded = !settingsMenuExpanded)}
    label="settings"
    menuType="settings"
    hideLabel
    expanded={settingsMenuExpanded}

  />
<!-- </div> -->
<div>
  <MenuContent {items} id="mainMenu" menuType="hamburger" expanded={mainMenuExpanded} />
  <MenuContent
    items={settingsItems}
    id="settingsMenu"
    menuType="settings"
    expanded={settingsMenuExpanded}
  />
</div>
