<script>
    import { Meta, Story } from "@storybook/addon-svelte-csf";
  import createSortAndFilterStore from "$stores/SortAndFilterStore";
  
    import SortAndFilter from "../lib/components/Forms/SortAndFilter.svelte"
    import testData from "./testData/entries.json"

    const store = createSortAndFilterStore(testData)
  </script>
  
  <Meta title="SortAndFilter" component={SortAndFilter} />
  
  <Story name="with image">
    <SortAndFilter {store} />
  </Story>
  