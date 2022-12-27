<script>
  /* eslint-disable */
  import Component from "$lib/layouts/LazyImageWithSrc.svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import testData from "$tests/stub/entries.json";
</script>

<Meta title="Component" component={Component} />

<Template let:args>
  <Component data={args.data} />
</Template>

<Story name="Primary" args={{ data: testData }} />
