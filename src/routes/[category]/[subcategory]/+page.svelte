<script>
  import Masonry from "$lib/components/Masonry.svelte";

  export let data;
</script>

<div class="pb-10">
  <h1 class="mx-auto tracking-tight text-5xl md:text-6xl lg:text-7xl text-yellow mb-4 text-center font-black pt-7">
    {data.metadata.title}.</h1>
  <p class="text-center my-10">{data.metadata.description}</p>
</div>
<Masonry items={data.entries} />
