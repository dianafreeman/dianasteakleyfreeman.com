<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import CodeScreen from "./CodeScreen.svelte";
  import Typewriter from "svelte-typewriter";
</script>

<Meta title="Inro Animations/CodeScreen" component={CodeScreen} />

<Template let:args>
  <CodeScreen {...args}>
  
  </CodeScreen>
</Template>

<Story name="Default" parameters={{ backgrounds: { default: "light" } }} />
