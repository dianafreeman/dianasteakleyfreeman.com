<script>
  export let title;
  export let description;
  export let imageSrc;
  export let tags;
  export let target;
</script>

<div class="min-w-sm max-w-sm overflow-hidden  m-auto">
  {#if imageSrc}
  <img class="w-full " src={imageSrc} alt="alt text for image">
  {/if}
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">
      <a href={`/${target}`}>{title}</a>
    </div>
    <p class="text-gray-700 text-base">{description}</p>
  </div>
  <!-- TODO: after sorting out a view for tags and the tag endpoint -->
  <!-- <div class="px-6 pt-4 pb-2">
    {#each tags as tag}
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #{tag}
      </span>
    {/each}
  </div> -->
</div>
