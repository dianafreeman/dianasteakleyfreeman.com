<script>
    import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
 import { writable } from "svelte/store";
  import NavLink from "./NavLink.svelte";

  let hovered = writable(false);
  let widthSpring = spring()
  let initialNameWidth;
  let animatedSpan;

  function toggleHovered() {
    hovered.update((h) => !h);
  }

  hovered.subscribe(isHovered => {
    if (initialNameWidth){
      widthSpring.set(isHovered ? initialNameWidth : 0)
    }
  })

  onMount(()=> {
    if (animatedSpan){
      initialNameWidth = animatedSpan.clientWidth
      widthSpring.set(0)
    }
  })
</script>

<a
  href="/"
  aria-label="Diana" 
  class="mb-0 m-2 pt-2 pb-0 text-2xl lg:text-3xl xl:text-4xl inline-flex font-bold focus:outline-white focus:outline-1"
  on:focus={toggleHovered}
  on:blur={toggleHovered}
  on:mouseenter={toggleHovered}
  on:mouseleave={toggleHovered}
>

  <span aria-hidden="true">D</span><span bind:this={animatedSpan} aria-hidden="true" style="width: {$widthSpring}px" class="overflow-hidden text-gray-400"
      >iana</span
    >.
</a>
