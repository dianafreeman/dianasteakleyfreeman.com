<script>
  /* eslint-disable */
  import Component from "$lib/layouts/LazyImageWithSrc.svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { expect } from "@storybook/jest";
  import { userEvent, waitFor, within } from "@storybook/testing-library";
  import testData from "$tests/stub/entries.json";

  async function play({ canvasElement }) {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("some text to click"));
  }
</script>

<Meta title="Component" component={Component} />

<Template let:args>
  <Component data={args.data} />
</Template>

<Story name="Primary" args={{ data: testData }} />
