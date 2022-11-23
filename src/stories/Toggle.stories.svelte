<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Toggle from "$lib/components/Toggles/ToggleSwitch.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/blog-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Toggle" component={Toggle} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/blog-stories/introduction#using-args -->
<Template let:args>
  <div class="mt-10 block">
    <Toggle>Text</Toggle>
  </div>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/blog-stories/args -->
<Story
  name="Primary"
  args={{
    primary: true,
    label: "Toggle"
  }}
/>
