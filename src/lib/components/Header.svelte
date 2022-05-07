<script>
  import SlidesStore from "$stores/SlidesStore";
  import SideNavStore from "$stores/SideNavStore";
  import NavBrand from "./NavBrand.svelte";
  import Link from "./NavItem.svelte";
  import NavToggle from "./NavToggle.svelte";
  import SideNav from "./SideNav.svelte";

  let activeIdx, toggleColor;
  let isOpen;

  function toggle() {
    SideNavStore.update((current) => !current);
  }

  SideNavStore.subscribe((sideNavOpen) => {
    isOpen = sideNavOpen;
    toggleColor = isOpen ? "black" : "white";
  });
  SlidesStore.subscribe((data) => {
    activeIdx = data.activeIndex;
  });

  const navItems = ["About", "Gallery", "Contact"];
</script>

<header class="w-full">
  <nav>
    <ul class="list-none flex flex-row align-middle w-full">
      <li class="flex flex-col flex-1">
        <div>
          <!-- this div prevents greedy hover responses on the navbrand-->
          <NavBrand textColor="white" />
        </div>
      </li>
      {#each navItems as item}
        <li class="flex flex-col">
          <Link>{item}</Link>
        </li>
      {/each}
      <li class="flex flex-col">
        <button
          class="flex flex-col align-middle m-auto font-poppins"
          on:click={toggle}
          style="z-index: 900"
        >
          <NavToggle {isOpen} class="w-7 mx-2" color={toggleColor} />
        </button>
      </li>
      <SideNav />
    </ul>
  </nav>
</header>
