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
      initialNameWidth = animatedSpan.clientWidth;
      widthSpring.set(0);
    }
  });
</script>

<a
  href="/"
  aria-label="Diana"
  class="m-2 my-3 inline-flex px-3 pt-2 pb-4 text-2xl font-bold focus:outline focus:outline-1 focus:outline-white lg:text-3xl xl:text-4xl"
  on:focus={toggleHovered}
  on:blur={toggleHovered}
  on:mouseenter={toggleHovered}
  on:mouseleave={toggleHovered}
  on:click={(e) => {
    if ($page.url.pathname === "/") {
      e.preventDefault();
      toggleHovered();
    }
  }}
>
  <span aria-hidden="true">d</span><span
    bind:this={animatedSpan}
    aria-hidden="true"
    style="width: {$widthSpring}px"
    class="text-gray-400 overflow-hidden">iana</span
  >.
</a>
