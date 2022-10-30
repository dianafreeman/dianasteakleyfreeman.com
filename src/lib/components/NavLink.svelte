<script>
  let clazz;
  export { clazz as class };
  export let href;
  export let props;
  
</script>

<a data-sveltekit-reload {href} class={clazz} {...props}>
<slot />    
</a>
