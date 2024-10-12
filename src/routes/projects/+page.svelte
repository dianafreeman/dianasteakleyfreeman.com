<script>
  export let data;
</script>

{#each data.entries as entry}
  <pre>
    {JSON.stringify(entry, null, 2)}
  </pre>
{/each}
