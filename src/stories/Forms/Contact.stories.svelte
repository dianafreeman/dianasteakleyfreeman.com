<script>
  import Contact from "$lib/components/Forms/ContactForm.svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  // import testData from "$test/stub/entries.json";
</script>

<Meta title="Forms/Contact" component={Contact} />

<Template let:args>
  <Contact data={args.data} />
</Template>

<Story name="default state" args={{ data: {} }} />
