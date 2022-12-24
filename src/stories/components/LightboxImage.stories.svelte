<script>
  import LightboxImage from "$lib/components/LightboxImage.svelte";
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import testImages from "$tests/stub/images.json";
</script>

<Meta title="LightboxImage" component={LightboxImage} />

<Story name="Primary">
  <div class="flex w-1/2">
    <LightboxImage
      class="object-cover object-center"
      image={{
        src: "/images/psychiatry-research-cover.jpg",
        alt: testImages[0].alt
      }} />
  </div>
</Story>
