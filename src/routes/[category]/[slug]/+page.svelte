<script>
  import ButtonLink from "$lib/components/Buttons/ButtonLink.svelte";

  export let data;
  console.log(data);
</script>

<div class="text-white px-6 py-32 lg:px-8">
  <div class="mx-auto max-w-3xl text-base/7">
    <h1 class="text-6xl font-bold my-6">{data.metadata.title}</h1>
    <div class="markdown">{@html data.entry}</div>
    <div class="my-5 text-right">
      {#if data.metadata.link}
        <ButtonLink
          target="_blank"
          href={data.metadata.link}
          iconProps={{ type: "externalLink" , large: true}}>
          Open in new window
        </ButtonLink>
      {/if}
    </div>
  </div>
</div>
