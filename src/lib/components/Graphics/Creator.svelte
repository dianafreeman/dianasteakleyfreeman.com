<script>
  import { afterUpdate, onMount } from "svelte";
  let clazz;
  export { clazz as class };
  export let strokeWidth = "8px";
  let style = `fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: ${strokeWidth};`;

  let ref1, ref2, ref3;

  export let isDrawing = false;
  let duration = 1500;
  // Helper function to animate a single path
  const animatePath = (path, delayNext) => {
    return new Promise((resolve) => {
      path.style.transition = `stroke-dashoffset ${duration}ms ease-in-out`;
      path.style.strokeDashoffset = "0";
      setTimeout(resolve, delayNext);
    });
  };

  const hidePaths = () => {
    ref1.style.strokeDashoffset = "1000";
    ref2.style.strokeDashoffset = "1000";
    ref3.style.strokeDashoffset = "1000";
  };

  async function draw() {
    // Apply stroke offset to each path sequentially
    await animatePath(ref1, duration / 3);
    await animatePath(ref2, duration / 2);
    await animatePath(ref3, duration);
  }

  afterUpdate(() => {
    if (isDrawing) {
      draw();
    } else {
      hidePaths()
    }
  });

  // onMount(async () => {
  //   // Apply stroke offset to each path sequentially
  //   await animatePath(ref1, duration / 3);
  //   await animatePath(ref2, duration / 2);
  //   await animatePath(ref3, duration);
  // });
</script>

<svg
  id="script"
  class={clazz}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 264.96 150">
  <path
    id="Cr"
    bind:this={ref1}
    d="m61.5,65.86s9.19-32.58-7.1-35.09-36.76,38.84-36.76,38.84c0,0-29.36,69.84,5.99,63.95,25.34-4.22,51.65-57.27,51.65-57.27l-12.53,46.11s4.96-32.32,30.88-49.03"
    {style} />
  <path
    id="eator"
    bind:this={ref2}
    d="m97.96,92.23s18.92-.95,19.56-14.63-17.12,6.52-21.62,19.24c-3.66,10.33-5.93,40.66,18.76,16.38,9.54-9.38,21.3-35.45,38.16-36.73,0,0-25.56,5.28-27.5,32.91-1.59,22.58,29.89-35.45,29.89-35.45,0,0-16.22,37.69-6.52,46.42,4.77,4.29,25.82-25.42,28.78-34.66s14.79-46.11,14.79-46.11c0,0-25.41,64.31-19.86,79.12s31.45-34.5,39.78-42.09l8.33-7.59s-22.9,17.77-21.05,45.06,31-24.28,21.05-36.08-23.17,7.66,9.01,2.99c7.86-1.14,13.18-5.3,13.18-5.3l-11,45.58s-4.46,3.46,11-28.7c6.71-13.95,18.27-17.35,18.27-17.35"
    {style} />
  <path
    id="T"
    bind:this={ref3}
    d="m154.3,57.17s17.67-.79,28.27-2.75,25.13-1.96,31.41,0"
    {style} />
</svg>

<style>
  #script path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
  }
</style>
