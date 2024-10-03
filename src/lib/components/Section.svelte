<script>
  let clazz;
  export { clazz as class };
  import { inview } from "svelte-inview";

  let inViewOptions = {
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "0px 0px 0px 0px"
  };
</script>

<section
  class={clazz}
  use:inview={inViewOptions}
  on:inview_enter={() => console.log("entering")}
  on:inview_leave={() => console.log("leaving")}>
  <slot />
</section>
