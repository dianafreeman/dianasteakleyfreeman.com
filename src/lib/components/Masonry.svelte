<script>
  import MasonryCard from "./Cards/MasonryCard.svelte";

  export let items = [];
  console.log(items)
</script>

<div class="columns-1 md:columns-2 lg:columns-3">
  {#each items as item}
    <div class="w-fit m-auto border white break-inside-avoid mb-4 p-2  shadow-lg">
      <MasonryCard
        target={`${item.metadata.category.slug}/${item.metadata.slug}`}
        title={item.metadata.title}
        imageSrc={item.metadata.image}
        date={new Date(item.metadata.date).toDateString()}
        tags={[...item.metadata.tags || []]}
      />
    </div>
  {/each}
</div>