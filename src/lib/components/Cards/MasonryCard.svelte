<script>
  export let title
  export let description
  export let imageSrc
  export let tags
</script>
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={imageSrc} alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{title}</div>
    <p class="text-gray-700 text-base">
     {description}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    {#each tags as tag }
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
    {/each}
  </div>
</div>