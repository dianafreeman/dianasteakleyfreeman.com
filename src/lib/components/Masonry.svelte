<script>
  import MasonryCard from "./Cards/MasonryCard.svelte";

  export let items = [];
  const getTags = item => [item.metadata.category || [], ...item.metadata.tags || []]
</script>

<div class="masonry">
  {#each items as item (item.id)}
    <div class="bg-darkest-gray masonry-item">
      <MasonryCard
        title={item.metadata.title}
        imageSrc={item.metadata.image}
        date={new Date(item.metadata.date).toDateString()}
        tags={getTags(item)} />
    </div>
  {/each}
</div>

<style>
  .masonry {
    column-count: 3;
    column-gap: 1rem;
  }

  .masonry-item {
    break-inside: avoid;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .masonry-img {
    width: 100%;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    .masonry {
      column-count: 2;
    }
  }

  @media (max-width: 480px) {
    .masonry {
      column-count: 1;
    }
  }
</style>
