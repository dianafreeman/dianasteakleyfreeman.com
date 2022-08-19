<script>
  export let entry;

  const { metadata, default: module } = entry;
  
</script>

<div id="listing" class="my-16">
  <div>
    {#if metadata?.tags && metadata?.tags.length}
      {#each metadata.tags as tag}
        <a href="/tags/{tag}" class="inline-block">
          <span
            class="inline-flex items-center px-3 py-0.5 mx-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
          >
            {tag}
          </span>
        </a>
      {/each}
    {/if}
  </div>
  <a href="#" class="block mt-4">
    <p class="text-xl font-semibold text-neutral-50">{metadata.title}</p>
    <!-- <p class="mt-3 text-base text-neutral-100">
      {metadata.description}
    </p> -->
  </a>
  <div class="mt-6 flex items-center">
    <div class="flex-shrink-0">
      <a href="#">
        <span class="sr-only">Paul York</span>
        <img
          class="h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </a>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-neutral-50">
        <a href="#"> Paul York </a>
      </p>
      <div class="flex space-x-1 text-sm text-neutral-200">
        <time datetime="2020-03-16"> Mar 16, 2020 </time>
        <span aria-hidden="true"> &middot; </span>
        <span> 6 min read </span>
      </div>
    </div>
  </div>
</div>
