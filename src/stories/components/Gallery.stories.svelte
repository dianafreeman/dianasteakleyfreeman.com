<script>
  import Gallery from "$lib/components/OldComponents/Gallery.svelte";
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import testImages from "$tests/stub/images.json";
</script>

<Meta title="Gallery" component={Gallery} />

<Story name="Primary">
  <Gallery images={testImages} />
</Story>
