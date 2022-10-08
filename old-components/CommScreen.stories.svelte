<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import CommScreen from "./CommScreen.svelte";
  </script>
  
  <Meta title="Inro Animations/CommScreen" component={CommScreen} />
  
  <Template let:args>
      <CommScreen {...args}>

    </CommScreen>
  </Template>
  
  <Story name="Default" parameters={{ backgrounds: { default: "light" } }} />
  