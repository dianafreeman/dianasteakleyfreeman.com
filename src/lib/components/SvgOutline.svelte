<script>
  import { spring } from "svelte/motion";

  let clazz;
  export { clazz as class };

  export let width;
  export let height;
  export let defaultStateLineWidth;
  export let topTranslate = -10;
  export let active = false;

  const polylineLength = width + height;

  const dasharray = spring(active ? -(polylineLength) : (polylineLength));
  const dashoffset = spring(active ? (polylineLength - defaultStateLineWidth) : -(polylineLength - defaultStateLineWidth));

  const top = spring(active ? 0 : topTranslate )

  $: {
    if (active) {
      top.set(0)
      setTimeout(() => dashoffset.set(0), 100)
    } else {
      dashoffset.set(-(polylineLength - defaultStateLineWidth))
      setTimeout(() =>  top.set(topTranslate), 100)
    }
  }

  
</script>

  <svg style:top={$top} class="absolute left-0 {clazz || ""}" {width} {height} xmlns="http://www.w3.org/2000/svg">
    <polyline
      stroke-dashoffset={$dashoffset}
      stroke-dasharray={$dasharray}
      stroke="white"
      fill="none"
      stroke-width={3}
      points="{width / 2},0 0,0 0,{height} {width / 2},{height}"
    /> 
    <polyline
      stroke-dashoffset={$dashoffset}
      stroke-dasharray={$dasharray}
      stroke="white"
      fill="none"
      stroke-width={3}
      points="{width / 2},0 {width},0 {width},{height} {width / 2},{height}"
    />
  </svg>

