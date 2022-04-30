<script>
  import SlidesStore from "$stores/SlidesStore";
  import SideNavStore from "$stores/SideNavStore";
  import NavBrand from "./NavBrand.svelte";
  import NavItem from "./NavItem.svelte";
  import NavToggle from "./NavToggle.svelte";
  import SideNav from "./SideNav.svelte";

  let slides, activeColor, activeIdx, toggleColor;
  let isOpen;

  function toggle() {
    SideNavStore.update((current) => !current);
  }

  SideNavStore.subscribe((sideNavOpen) => {
    isOpen = sideNavOpen;
    toggleColor = isOpen ? "black" : "white";
  });
  SlidesStore.subscribe((data) => {
    slides = data.slides;
    activeIdx = data.activeIndex;
    activeColor = slides[activeIdx].color;
  });
</script>

<header class="flex flex-row">
  <nav class="w-full p-10">
    <li class="list-none flex flex-row justify-between align-middle">
      <NavBrand textColor="white" />
      <NavItem>About</NavItem>
      <NavItem>Gallery</NavItem>
      <button class="flex align-middle m-auto font-poppins" on:click={toggle} style="z-index: 900">
        <NavToggle {isOpen} class="w-7 mx-2" color={toggleColor} />
      </button>
      <SideNav  />
    </li>
  </nav>
</header>
