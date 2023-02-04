<script>
  import Seo from "$lib/components/Seo.svelte";
  import SelectField from "$lib/components/FormFields/types/SelectField.svelte";
  import BackButton from "$lib/components/BackButton.svelte";
  import List from "$lib/components/List.svelte";
  import { page } from "$app/stores";
  import { writable, derived} from "svelte/store";

  /** @type {import('./$types').PageData} */
  export let data;


  const category = writable({value: "all-categories", label: "all categories"})
  const results = writable([...data.entries])


  category.subscribe( cat => {
    if (cat.label === "all categories") return results.set(data.entries)
    results.set( data.entries.filter(d => d.tags.includes(cat.label)))
  })

  $: console.log('results',$results) 


  // const { results, allFilters, options, category } = sortAndFilterStore;
</script>

<Seo title={data.title} />
<div
  class="mx-2 flex w-auto flex-row after:{data.filters.tags > 0
    ? 'items-top'
    : 'items-center'} justify-between">
  <BackButton />
  <div class="m-2 flex w-full flex-col">
    <label
      class="text-md text-gray-700 mb-2 block font-bold lowercase tracking-wide"
      for="browse-by-category">
      Browse by Category.
    </label>

    <SelectField
      on:change={(d) => {
       console.log("event detail", d.detail)
       category.set(d.detail)
      }}
      value={$category.value}
      id="browse-by-category"
      options={[{value: "all-categories", label: "all categories"}, ...data.filters.tags]}
       />
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <h2 id="content-start" class="sr-only" tabindex={0}>Results</h2>
  </div>
</div> 

<List
  items={$results}
  componentType={$page.url.pathname.includes("resources")
    ? "listItem"
    : "card"} />
