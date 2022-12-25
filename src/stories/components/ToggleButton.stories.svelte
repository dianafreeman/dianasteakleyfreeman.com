<script>
  import MarginDecorator from "$storybook/decorators/MarginDecorator.svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import ToggleButton from "$lib/components/Buttons/ToggleButton.svelte";
  import { expect } from "@storybook/jest";
  import { userEvent, waitFor, within } from "@storybook/testing-library";

  async function playClick({ canvasElement }) {
    const canvas = within(canvasElement);
    const button =  canvas.getByText("Hello Button")

    await userEvent.click(button);
    expect(canvas.queryByText("ON")).toBeInTheDocument()
    expect(canvas.queryByText("OFF")).not.toBeInTheDocument()
  }

  async function playBeforeClick({ canvasElement }) {
    const canvas = within(canvasElement);
    
    expect(canvas.queryByText("OFF")).toBeInTheDocument()
    expect(canvas.queryByText("ON")).not.toBeInTheDocument()
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

<Story name="disabled" args={{useSwitch: true}} play={playBeforeClick}/>
<Story name="enabled" args={{useSwitch: true}} play={playClick}/>
<Story name="disabled/with icon" args={{useSwitch: true}}/>
<Story name="enabled/with icon" args={{useSwitch: true}}/>
