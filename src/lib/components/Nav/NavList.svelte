<script>
  import NavLink from "./NavLink.svelte";

  /** @type { string } */
  let clazz = "";
  export { clazz as class };
  /** @type { string } */
  export let title;
  /** @type { Object[] } */
  export let items;
</script>

<p class="font-bold lowercase">{title}.</p>
<ul class={clazz}>
  {#each items as item}
    <li class="lowercase"><NavLink href={item.href}>{item.text}</NavLink></li>
  {/each}
</ul>
