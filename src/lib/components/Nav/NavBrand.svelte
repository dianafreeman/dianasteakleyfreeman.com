<script>
  import { onMount } from "svelte";

  import { spring } from "svelte/motion";

  export let color;

  let width = 85;
  let hidden = false;
  let spanWidth = spring(0);

  function show() {
    spanWidth.set(width);
  }

  function hide() {
    spanWidth.set(0);
  }
</script>

<div id="prevent-greedy-hover-response">
  <a
    href="/"
    on:focus={show}
    on:blur={hide}
    on:mouseenter={show}
    on:mouseleave={hide}
    class="text-4xl font-bold inline-flex"
    style="color: {color};"
  >
    <div>d</div>
    <div class="overflow-hidden" style="width: {$spanWidth}px;">iana</div>
    .
  </a>
</div>
