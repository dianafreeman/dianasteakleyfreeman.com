<script>
  import { writable } from "svelte/store";

  let clazz = "";
  export { clazz as class };
  export let href;
  export let isActive;

  const activeClass = "bg-neutral-900 text-white";
</script>

<li class="flex flex-col {clazz}">
  <a {href} class="px-3 py-2 rounded-md text-sm font-medium">
    <slot />
  </a>
</li>
