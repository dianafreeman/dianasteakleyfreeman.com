<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import CreationScreen from "./CreationScreen.svelte";
  </script>
  
  <Meta title="Inro Animations/CreationScreen" component={CreationScreen} />
  
  <Template let:args>
      <CreationScreen {...args}>Oh hello.</CreationScreen>
  </Template>
  
  <Story name="Default" parameters={{ backgrounds: { default: "light" } }} />
  