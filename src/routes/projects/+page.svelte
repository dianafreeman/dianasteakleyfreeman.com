<script>
  import HorizontalCard from "$lib/components/Cards/HorizontalCard.svelte";

  export let data;
</script>

{#each data.entries as entry}
  <HorizontalCard title={entry.metadata.title} imageSrc="localhost:5173/{entry.metadata.image}" />
  <pre>
    {JSON.stringify(entry, null, 2)}
  </pre>
{/each}
