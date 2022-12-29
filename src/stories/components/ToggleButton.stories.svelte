<script>
  import MarginDecorator from "$storybook/decorators/MarginDecorator.svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import ToggleButton from "$lib/components/Buttons/ToggleButton.svelte";
  import { expect } from "@storybook/jest";
  import { userEvent, within } from "@storybook/testing-library";

  async function playClick({ canvasElement }) {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Hello Button");

    await userEvent.click(button);
    expect(canvas.queryByText("ON")).toBeInTheDocument();
    expect(canvas.queryByText("OFF")).not.toBeInTheDocument();
  }

  async function playBeforeClick({ canvasElement }) {
    const canvas = within(canvasElement);

    expect(canvas.queryByText("OFF")).toBeInTheDocument();
    expect(canvas.queryByText("ON")).not.toBeInTheDocument();
  }
</script>

<Meta
  title="Buttons/Toggles"
  component={ToggleButton}
  parameters={{ actions: { handles: ["click"] } }}
  decorators={[() => MarginDecorator]} />

<Template let:args>
  <ToggleButton {...args}>Hello Button</ToggleButton>
</Template>

<Story name="unclicked" args={{ useSwitch: true }} play={playBeforeClick} />
<Story name="clicked" args={{ useSwitch: true }} play={playClick} />
<Story name="unclicked/with icon" args={{ useSwitch: true, iconProps: { type: "cookie", large: true} }} />
<Story name="clicked/with icon" args={{ useSwitch: true, iconProps: { type: "cookie", large: true} }} play={playClick} />
