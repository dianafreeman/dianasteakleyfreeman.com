<script>
  import { spring } from "svelte/motion";

  let lines = Array(2);
  let clazz;
  export { clazz as class };
  export let color;
  export let isOpen;

  const x1s = spring([0, 0]);
  const y1s = spring([90, 0]);
  const x2s = spring([90, 90]);
  const y2s = spring([0, 90]);
  $: {
    if (!isOpen) {
      x1s.update((arr) => (arr = [0, 40]));
      y1s.update((arr) => (arr = [30, 70]));
      x2s.update((arr) => (arr = [100, 100]));
      y2s.update((arr) => (arr = [30, 70]));
    } else {
      x1s.update((arr) => (arr = [0, 0]));
      y1s.update((arr) => (arr = [90, 0]));
      x2s.update((arr) => (arr = [90, 90]));
      y2s.update((arr) => (arr = [0, 90]));
    }
  }
</script>

<svg viewBox="0 0 100 100" class={clazz} {...$$props}>
  {#each lines as _line, i}
    <line stroke={color} stroke-width={5} x1={$x1s[i]} y1={$y1s[i]} x2={$x2s[i]} y2={$y2s[i]} />
  {/each}
</svg>
