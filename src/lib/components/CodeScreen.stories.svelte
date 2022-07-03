<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import CodeScreen from "./CodeScreen.svelte";
</script>

<Meta title="Inro Animations/CodeScreen" component={CodeScreen} />

<Template let:args>
  <div style="height: 300px;">
    <CodeScreen {...args}>Oh hello.</CodeScreen>
  </div>
</Template>

<Story name="Default" parameters={{ backgrounds: { default: "light" } }} />
