<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Trail from "./Trail.svelte";
  import words from "$stores/data/TrailWords.json";
</script>

<Meta
  title="Animation/Trail"
  component={Trail}
  argTypes={{
    input: { control: "object" }
  }}
/>

<Template let:args>
  <Trail items={args.input} />
</Template>

<Story
  name="Home Page"
  args={{
    input: words
  }}
/>
