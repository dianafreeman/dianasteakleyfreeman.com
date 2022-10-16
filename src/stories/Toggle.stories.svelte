<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Toggle from "$lib/components/ToggleSwitch.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/blog-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Toggle" component={Toggle} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/blog-stories/introduction#using-args -->
<Template let:args>
  <div class="block mt-10">
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
