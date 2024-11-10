<script>
  import NavToggle from "./NavToggle.svelte";
  import NavBrand from "./NavBrand.svelte";
  import { menuIsOpen, _menuIsOpen } from "$stores/LayoutStore";

  const navItemClasses = `hover:text-blue-500 focus:text-blue-500 active:text-blue-500  hover:underline active:underline focus:underline font-bold text-xl flex items-center p-5 w-full `;

  export let items;

  // Toggle function for menu
  export function toggleMenu() {
    _menuIsOpen.update((currentValue) => {
      return !currentValue; // Simply toggle the internal state
    });
  }
</script>

<nav class="" aria-label="Main Navigation">
  <div class="flex flex-row justify-between md:flex bg-darkest-gray">
    <div>
      <!-- nav brand wrapper for flex-->
      <NavBrand class="" />
    </div>
    <div class="w-full md:w-fit md:flex md:flew-row">
      <!-- menu grouping wrapper -->
      <div class="w-full md:flex md:w-fit md:flex-row">
        <NavToggle
          class={`${navItemClasses} md:hidden`}
          on:click={toggleMenu}
          label="menu"
          iconType="hamburger"
          elementProps={{
            "aria-expanded": $menuIsOpen,
            "aria-controls": "mainMenu"
          }} />
        <ul
          id="mainMenu"
          class="flex list-none flex-col md:flex-row items-center justify-center w-full">
          {#each items as item}
            <li
              class="w-full text-white list-none"
              aria-hidden={!$menuIsOpen}
              class:hidden={!$menuIsOpen}>
              <a href={item.url} class={navItemClasses}>{item.label}</a>
            </li>
          {/each}
        </ul>
      </div>
      <!-- <div class="w-full md:flex md:flex-col md:items-end relative">
        <NavToggle
          label="settings"
          iconType="settings"
          class={`${navItemClasses} md:justify-end`}
          elementProps={{
            "aria-expanded": $settingsMenuIsOpen,
            "aria-controls": "settingsPanel"
          }}
          on:click={() => {
            console.log("clicked")
            settingsMenuIsOpen.update((v) => !v);
          }} />
      </div> -->
    </div>
    <!-- end menu grouping wrapper -->
  </div>
</nav>
