<script>
	import { createEventDispatcher } from "svelte";
  let clazz;
  export { clazz as class };
  import { inview } from "svelte-inview";

  let inViewOptions = {
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "0px 0px 0px 0px"
  };

  const dispatch = createEventDispatcher()

  export let id


  function onEnterView(){
    dispatch("viewEnter")
  }
  function onExitView(){
    dispatch("viewExit")
  }
</script>

<section
{id}
  class={clazz}
  use:inview={inViewOptions}
  on:inview_enter={onEnterView}
  on:inview_leave={onExitView}>
  <slot />
</section>
