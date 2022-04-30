<script>
  import SlidesStore from "$stores/SlidesStore";
  import NavItem from "./NavItem.svelte";
  import NavToggle from "./NavToggle.svelte";
  import SideNav from "./SideNav.svelte";

  let slides, activeColor, activeIdx;
  let isOpen = false;
  function toggle() {
    isOpen = !isOpen;
  }
  SlidesStore.subscribe((data) => {
    slides = data.slides;
    activeIdx = data.activeIndex;
    activeColor = slides[activeIdx].color;
  });
</script>

<header class="flex flex-row">
  <nav class="w-full p-10">
    <li class="list-none flex flex-row justify-between align-middle">
      <ul class="flex flex-1"><a href="/" class="text-4xl font-bold"> d. </a></ul>
      <NavItem>About</NavItem>
      <NavItem>Gallery</NavItem>
      <button class="flex align-middle m-auto font-poppins" on:click={toggle} style="z-index: 900">
        <NavToggle {isOpen} class="w-7 mx-2" color={isOpen ? "black" : "white"} />
      </button>
    </li>
    {#if isOpen}
      <SideNav activeColor={"red"} {activeIdx} items={slides} />
    {/if}
  </nav>
</header>
