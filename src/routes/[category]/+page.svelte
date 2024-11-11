<script>
  import { page } from "$app/stores";
  import Masonry from "$lib/components/Masonry.svelte";

  export let data;
</script>

<div class="pb-10">
  <h1 class="text-3xl md:text-5xl mt-10 font-bold text-center">{data.meta.title}.</h1>
  <p class="text-center my-10">{data.meta.description}</p>
</div>
<Masonry items={data.entries} />
