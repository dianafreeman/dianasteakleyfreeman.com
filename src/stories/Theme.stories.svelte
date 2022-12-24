<script>
  // <!--
  //     colors: {
  //         "darkest-gray": "#0e0e0e",
  //         "dark-gray": "#222222",
  //         "medium-gray": "#272727",
  //         gray: "#808080",
  //         "light-gray": "#c1c1c1"
  //       },
  //  -->

  import { Meta, Story } from "@storybook/addon-svelte-csf";

</script>

<Meta title="Theme/Colors" />

<Story name="Dark">
  <div class="bg-black p-5">black</div>
  <div class="bg-darkest-gray p-5">darkest-gray</div>
  <div class="bg-dark-gray p-5">dark-gray</div>
  <div class="bg-gray p-5">gray</div>
  <div class="bg-light-gray p-5">light-gray</div>
  <div class="bg-lightest-gray p-5">lightest-gray</div>
</Story>

<Story name="Brands">
  <!-- TODO -->
</Story>
