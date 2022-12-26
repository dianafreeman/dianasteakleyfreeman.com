<script>
  import MarginDecorator from "$storybook/decorators/MarginDecorator.svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import Button from "$lib/components/Buttons/Button.svelte";
  import ToggleButton from "$lib/components/Buttons/ToggleButton.svelte";
</script>

<Meta
  title="Buttons/Main"
  component={Button}
  parameters={{ actions: { handles: ["click"] } }}
  subcomponents={{ ToggleButton }}
  decorators={[() => MarginDecorator]} />

<Template let:args>
  <Button {...args}>Hello World</Button>
</Template>

<Story name="primary" />
<Story name="primary/static borders" args={{ animateBorders: false }} />
<Story
  name="primary/with icon"
  args={{ iconClasses: "las la-external-link-alt text-2xl mx-2" }} />
<Story
  name="primary/with icon/static borders"
  args={{ animateBorders: false }} />
