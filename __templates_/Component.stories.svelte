<script>
  import Component from "$lib/components/Component.svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import testData from "./testData/entries.json";
</script>

<Meta title="Component" component={Component} />

<Template let:args>
  <Component data={args.data} />
</Template>

<Story name="Primary" args={{ data: testData }} />
