<script>
  import { page } from "$app/stores";
  import NavItem from "./NavItem.svelte";
  import NavToggle from "./NavToggle.svelte";
  import SideNav from "./SideNav.svelte";

  export let slides
  export let activeIdx

  let isOpen = false;
  function toggle() {
    isOpen = !isOpen;
  }
</script>

<header class="flex flex-row h-full ">
  <nav class="w-full p-4">
    <li class="list-none flex flex-row justify-between text-white align-middle">
      <ul class="flex flex-1"><a href="/" class="text-4xl font-bold"> d. </a></ul>
      <NavItem>About</NavItem>
      <NavItem>Gallery</NavItem>
      <NavItem>Menu</NavItem>
      <button class="flex align-middle m-auto font-poppins" on:click={toggle} style="z-index: 900">
        <NavToggle isOpen={isOpen} class="w-7 mx-2" color={isOpen ? "black" : "white"} />
      </button>
    </li>
    {#if isOpen}
      <SideNav activeColor={'red'} {activeIdx} items={slides} />
    {/if}
  </nav>
</header>
