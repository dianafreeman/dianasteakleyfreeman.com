<script>
  export let category;
  export let slug;
  export let entry;

  const component = () => import(`../../content/${category}/${slug}.md`);
</script>

<h1 class="p-6 text-4xl font-bold font-poppins">{entry.metadata.title}</h1>

<div class="p-6">
  {#await component() then module}
    <svelte:component this={module.default} />
  {/await}
</div>
