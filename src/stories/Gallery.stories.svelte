<script>
  import Gallery from "$lib/components/Gallery.svelte";
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import testImages from "$test/stub/images.json";
</script>

<Meta title="Gallery" component={Gallery} />

<Story name="Primary">
  <Gallery images={testImages} />
</Story>
