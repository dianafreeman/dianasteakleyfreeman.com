<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Trail from "./index.svelte";
  import words from "./TrailWords.json";
</script>

<Meta
  title="Animation/Trail"
  component={Trail}
  argTypes={{
    input: { control: "object" }
  }}
/>

<Template let:args>
  <Trail input={args.input} />
</Template>

<Story
  name="Home Page"
  args={{
    input: words
  }}
/>
