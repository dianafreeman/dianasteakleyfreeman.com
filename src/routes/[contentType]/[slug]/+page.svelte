<script>
  export let data;
</script>

<div class="text-white px-6 py-32 lg:px-8">
  <div class="mx-auto max-w-3xl text-base/7">
    <h1 class="text-6xl font-bold my-6">{data.metadata.title}</h1>
    <p>{@html data.entry}</p>
  </div>
</div>
