<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import FlatButtonGroup from "./FlatButtonGroup.svelte";
</script>

<Meta title="ButtonGroups/FlatButtonGroup" component={FlatButtonGroup} />

<Template let:args>
  <FlatButtonGroup {...args} />
</Template>

<Story name="Default" />
