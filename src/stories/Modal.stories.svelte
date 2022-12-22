<script>
  import Modal from "$lib/components/Modal.svelte";
  import { Meta, Story } from "@storybook/addon-svelte-csf";
</script>

<Meta title="Modal" component={Modal} />

<Story name="main">
  <Modal title="My Modal">
    hi there from a slot
  </Modal>
</Story>
