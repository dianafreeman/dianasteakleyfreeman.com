<script>
  import Contact from "$lib/components/Forms/ContactForm.svelte";
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  // import testData from "$tests/stub/entries.json";
</script>

<Meta title="Forms/Contact Form" component={Contact} />

<Template let:args>
  <Contact data={args.data} />
</Template>

<Story name="default state" args={{ data: {} }} />
