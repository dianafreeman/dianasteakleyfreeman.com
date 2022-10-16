<script>
  import { spring } from "svelte/motion";

  let clazz;
  export { clazz as class };

  export let width;
  export let height;
  export let strokeColor = "white";
  export let defaultStateLineWidth;
  export let topTranslate = -10;
  export let active = false;

  const polylineLength = width;

  const dasharray = spring(active ? -polylineLength : polylineLength);
  const dashoffset = spring(
    active ? polylineLength - defaultStateLineWidth : -(polylineLength - defaultStateLineWidth)
  );

  const top = spring(active ? 0 : topTranslate);

  $: {
    if (active) {
      top.set(0);
      dashoffset.set(0);
    } else {
      dashoffset.set(-(polylineLength - defaultStateLineWidth));
      top.set(topTranslate);
    }
  }
</script>

<svg
  style:top={$top}
  class="absolute left-0 top-0 {clazz || ''}"
  {width}
  xmlns="http://www.w3.org/2000/svg"
>
  <polyline
    stroke-dashoffset={$dashoffset}
    stroke-dasharray={$dasharray}
    stroke={strokeColor}
    fill="none"
    stroke-width={1}
    points="0,{height} {width},{height}"
  />
</svg>
