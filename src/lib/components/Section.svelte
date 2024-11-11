<script>
  let clazz;
  export { clazz as class };
  import { inview } from "svelte-inview";

  let inViewOptions = {
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "0px 0px 0px 0px"
  };

  export let id
  export let onInView
  export let onOutOfView
</script>

<section
{id}
  class={clazz}
  use:inview={inViewOptions}
  on:inview_enter={onInView}
  on:inview_leave={onOutOfView}>
  <slot />
</section>
