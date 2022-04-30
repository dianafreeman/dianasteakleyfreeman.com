<script>
  let lines = Array(2);
  let clazz;
  export { clazz as class };
  export let color;
  export let isOpen
  
  $: x1s = isOpen ? [0, 0] : [0, 0];
  $: y1s = isOpen ? [90, 0] : [30, 70];
  $: x2s = isOpen ? [90, 90] : [100, 100];
  $: y2s = isOpen ? [0, 90] : [30, 70];
</script>

<svg viewBox="0 0 100 100" class={clazz} {...$$props}>
  {#each lines as _line, i}
    <line stroke={color} stroke-width={5} x1={x1s[i]} y1={y1s[i]} x2={x2s[i]} y2={y2s[i]} />
  {/each}
</svg>
