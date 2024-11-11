<script>
  import MasonryCard from "./Cards/MasonryCard.svelte";

  export let items = [];
</script>

<div class="columns-1 md:columns-2 lg:columns-3">
  {#each items as item}
    <MasonryCard
      target={`${item.metadata.category.slug}/${item.metadata.slug}`}
      title={item.metadata.title}
      imageSrc={item.metadata.image}
      date={new Date(item.metadata.date).toDateString()}
       />
            <!-- 
       TODO: after sorting out a view for tags and the tag endpoint 
       tags={[...(item.metadata.tags || [])]}
       -->

  {/each}
</div>
