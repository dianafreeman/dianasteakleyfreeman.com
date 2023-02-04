<script>
  import Card from "./Card.svelte";
  import ListItem from "./ListItem.svelte";
  export let componentType;
  export let items = [];

  let clazz;
  export { clazz as class };
  const COMPONENT_TYPE_MAP = {
    card: Card,
    listItem: ListItem
  };

  const componentProps = (item) => ({
    title: item.metadata ? item.metadata.title : item.title,
    target: item.metadata ? item.metadata.relativePath : item.relativePath,
    imgSrc: item.metadata ? item.metadata.image : item.image || null,
  });

  const CARD_LIST_CLASSES  = "grid w-full justify-center gap-4 p-3 md:grid-cols-2 lg:grid-cols-3"

</script>

<ol class={componentType === "card" ? CARD_LIST_CLASSES : "w-full px-2"}>
  {#each items as item}
    <li>
      <svelte:component
        this={COMPONENT_TYPE_MAP[componentType]}
        {...componentProps(item)} />
    </li>
  {/each}
</ol>
