<script>
  import Modal from "$lib/components/Modal/Modal.svelte";
  import { Meta, Story } from "@storybook/addon-svelte-csf";
</script>

<Meta title="Modal" component={Modal} />

<Story name="Primary">
  <Modal buttonText="Open Modal" title="My Modal">hi there from a slot</Modal>
</Story>

<Story name="with Icon">
  <Modal buttonText="Open Modal" title="My Modal" buttonIconType="externalLink"
    >hi there from a slot</Modal>
</Story>
