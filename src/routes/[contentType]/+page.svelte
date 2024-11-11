<script>
  import Masonry from "$lib/components/Masonry.svelte";

  export let data;
</script>

<div class="pb-10">
  <h1 class="text-3xl md:text-5xl font-bold text-center">{data.title}.</h1>
</div>
<Masonry items={data.entries} />
