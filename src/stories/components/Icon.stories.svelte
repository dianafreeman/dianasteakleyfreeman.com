<script>
  import Icon from "$lib/components/Icon.svelte";
  import { Meta, Story } from "@storybook/addon-svelte-csf";
</script>

<Meta title="Icons" component={Icon} />

<Story name="Primary">
  <li>
    check
    <Icon type="check" large />
  </li>
  <li>
    square
    <Icon type="square" large />
  </li>
  <li>
    menu
    <Icon type="menu" large />
  </li>
  <li>
    close
    <Icon type="close" large />
  </li>
  <li>
    settings
    <Icon type="settings" large />
  </li>
  <li>
    externalLink
    <Icon type="externalLink" large />
  </li>
  <li>
    copyLink
    <Icon type="copyLink" large />
  </li>
  <li>
    filter
    <Icon type="filter" large />
  </li>
  <li>
    important
    <Icon type="important" large />
  </li>
  <li>
    question
    <Icon type="question" large />
  </li>
</Story>
