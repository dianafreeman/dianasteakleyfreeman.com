<script>
  import Section from "$lib/components/Section.svelte";
  export let title;
  export let entries;
  console.log(entries);
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="flex flex-row" style="width: 100vw">
  <Section
    class="flex flex-col justify-around overflow-scroll relative p-5"
    style="width: 100vw; height:100vh"
  >
    <div class="flex flex-col justify-center">
      <h3 class="my-6">{title}</h3>
      <ul>
        {#each Object.values(entries) as entry}
          <li><a href={entry.metadata.path}>{entry.metadata.title}</a></li>
        {/each}
      </ul>
    </div>
  </Section>
</div>
