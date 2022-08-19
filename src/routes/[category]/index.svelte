<script>
  import BlogItem from "$lib/components/BlogItem.svelte";
  import Section from "$lib/components/Section.svelte";
  export let title;
  export let entries;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="relative min-h-screen flex flex-col">
  <!-- 3 column wrapper -->
  <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
    <!-- Left sidebar & main wrapper -->
    <div class="flex-1 min-w-0 bg-black ">
      <div class="border-b border-gray-200  bg-black">
        <div class="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 ">
          <!-- Start title section area -->
          <div class="h-full relative" style="min-height: 12rem">
            <div class="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg">
              <h1>{title}</h1>
            </div>
          </div>
          <!-- End left column area -->
        </div>
      </div>

      <div class="bg-black lg:min-w-0 lg:flex-1">
        <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
          <!-- Start main area-->
          <div class="relative h-full">
            <div class="border-2 border-gray-200 border-dashed rounded-lg">
              <div class="relative max-w-lg my-auto lg:max-w-7xl">
                {#each Object.values(entries) as entry}
                  <BlogItem {entry} />
                {/each}
              </div>
            </div>
          </div>
          <!-- End main area -->
        </div>
      </div>
    </div>

    <div
      class="bg-neutral-500 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-neutral-200"
    >
      <div class="h-full pl-6 py-6 lg:w-80">
        <!-- Start footer area -->
        <div class="h-full relative" style="min-height: 16rem">
          <div class="absolute inset-0 border-2 border-neutral-200 border-dashed rounded-lg" />
        </div>
        <!-- End footer area -->
      </div>
    </div>
  </div>
</div>
