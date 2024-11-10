<script>
  import HorizontalCard from "$lib/components/Cards/HorizontalCard.svelte";

  export let data;
</script>

<div class="pb-10">
  <h1 class="text-3xl md:text-5xl font-bold text-center">Blog</h1>
</div>

<div class="w-full px-10 flex flex-wrap justify-center">
  {#each data.entries as entry}
    <HorizontalCard
      title={entry.metadata.title}
      description={entry.metadata.description}
      imageSrc={entry.metadata.image} />
  {/each}
</div>
