<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import RoundButtonGroup from "./RoundButtonGroup.svelte";
  </script>
  
  <Meta title="ButtonGroups/RoundButtonGroup" component={RoundButtonGroup} />
  
  <Template let:args>
    <RoundButtonGroup {...args} />
  </Template>
  
  <Story name="Default" />
  