<!-- BREAK HERE -->
<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { userEvent, waitFor, within } from "@storybook/testing-library";
  import { expect } from "@storybook/jest";
  import SortAndFilter from "$lib/components/Forms/SortAndFilter.svelte";
  import createSortAndFilterStore from "$stores/SortAndFilterStore";

  import testData from "../testData/entries.json";

  const store = createSortAndFilterStore(testData);

  async function play({ canvasElement, args }) {
    const canvas = within(canvasElement);
    const select = await within(canvasElement).getByLabelText(
      "browse by category",
      { normalizer: (s) => s.toLowerCase() }
    );
    await userEvent.selectOptions(select, ["Technology And Humanity"]);
    await userEvent.click(canvas.getByText("history"));

  }
</script>

<Meta title="Forms/Sort and Filter" component={SortAndFilter} />

<Template let:args>
  <SortAndFilter {...args} />
</Template>

<Story name="Default State" args={{ store }} {play} />
