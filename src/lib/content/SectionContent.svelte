<script>
  import Card from "$lib/components/Card.svelte";
  import layoutStore from "$stores/LayoutStore";
  import { derived } from "svelte/store";

  export let section;
  export let cell;
  const { activeCell } = layoutStore;

  const isActiveSection = derived(
    activeCell,
    ($activeCell) => $activeCell.y === cell.y && $activeCell.x === cell.x
  );
</script>

<div class="p-6 text-white h-full w-full flex items-end">
  <div class="h-4/5 w-full">
    <h1 class="font-bold text-6xl xl:text-7xl mb-8">
      {section.categoryName}
    </h1>
    <!-- 
    <button
      disabled={!$isActiveSection}
      class="disabled:bg-red-300 bg-white w-full text-black p-2 rounded-full my-12"
      >{section.verb}</button
    > -->

    <div class="overflow-x-scroll flex flex-row w-auto">
      <div class="mx-2 py-6">
        <Card />
      </div>

      <div class="mx-2 py-6">
        <Card />
      </div>

      <div class="mx-2 py-6">
        <Card />
      </div>
    </div>
  </div>
</div>
