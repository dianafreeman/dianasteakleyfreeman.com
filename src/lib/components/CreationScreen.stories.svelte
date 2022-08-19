<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import CreationScreen from "./CreationScreen.svelte";
  import Image from "./graphics/creatorgraphic.svg";
</script>

<Meta title="Inro Animations/CreationScreen" component={CreationScreen} />

<Template let:args>
  <CreationScreen {...args}>
   
  </CreationScreen>
</Template>

<Story name="Default" parameters={{ backgrounds: { default: "light" } }} />
