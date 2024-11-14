<script>
  import MasonryCard from "./Cards/MasonryCard.svelte";

  export let items = [];
</script>

<div class="columns-1 md:columns-2 lg:columns-3">
  {#each items as item}
  <!-- {item.category} -->
    <MasonryCard
      target={`/posts/${item.slug}`}
      title={item.title}
      imageSrc={item.image}
      date={new Date(item.date).toDateString()}
       />
            <!-- 
       TODO: after sorting out a view for tags and the tag endpoint 
       tags={[...(item.metadata.tags || [])]}
       -->

  {/each}
</div>
