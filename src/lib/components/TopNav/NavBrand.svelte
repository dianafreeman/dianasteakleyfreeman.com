<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import { writable } from "svelte/store";

  let hovered = writable(false);
  let widthSpring = spring();
  let initialNameWidth;
  let animatedSpan;

  function toggleHovered() {
    hovered.update((h) => !h);
  }

  hovered.subscribe((isHovered) => {
    if (initialNameWidth) {
      widthSpring.set(isHovered ? initialNameWidth : 0);
    }
  });

  onMount(() => {
    if (animatedSpan) {
      initialNameWidth = animatedSpan.clientWidth + 1;
      widthSpring.set(0);
    }
  });
</script>

<a
  href="/"
  aria-label="DianaSteakleyFreeman.com"
  class="outline-none m-2 my-3 inline-flex px-3 pt-2 pb-4 text-2xl font-bold focus:underline active:underline focus:text-sky-blue active:text-sky-blue hover:text-sky-blue lg:text-3xl xl:text-4xl"
  on:focus={toggleHovered}
  on:blur={toggleHovered}
  on:mouseenter={toggleHovered}
  on:mouseleave={toggleHovered}
  on:click={(e) => {
    if ($page.url.pathname === "/") {
      e.preventDefault();
      toggleHovered();
    }
  }}>
  <span aria-hidden="true">D</span><span
    bind:this={animatedSpan}
    aria-hidden="true"
    style="width: {$widthSpring}px"
    class="text-white overflow-hidden">iana</span
  >.
</a>
