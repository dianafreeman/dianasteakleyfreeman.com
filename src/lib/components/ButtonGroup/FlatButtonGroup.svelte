<script>
  import LayoutStore from "$stores/LayoutStore";
  import SolidCircleLeft from "$lib/icons/solidCircleLeft.svelte";
  import SolidCircleUp from "$lib/icons/solidCircleUp.svelte";
  import SolidCircleDown from "$lib/icons/solidCircleDown.svelte";
  import SolidCircleRight from "$lib/icons/solidCircleRight.svelte";
  import ContentStore from "$stores/ContentStore";
  import { derived } from "svelte/store";

  const { incrementRow, decrementRow, incrementCol, decrementCol } = LayoutStore;

  const allButtons = derived(LayoutStore, ($LayoutStore) => {
    return [
        {
          id: "scrollLeft",
          text: "left",
          value: { x: $LayoutStore.x - 1, y: $LayoutStore.y },
          component: SolidCircleLeft,
          fn: decrementCol
        },
      
      
        {
          id: "scrollUp",
          text: "up",
          value: { y: $LayoutStore.y - 1, x: $LayoutStore.x },
          component: SolidCircleUp,
          fn: decrementRow
        },

        {
          id: "scrollDown",
          text: "down",
          value: { y: $LayoutStore.y + 1, x: $LayoutStore.x },
          component: SolidCircleDown,
          fn: incrementRow
        },
      
        {
          id: "scrollRight",
          text: "right",
          value: { x: $LayoutStore.x + 1, y: $LayoutStore.y },
          component: SolidCircleRight,
          fn: incrementCol
        }
      
    ];
  });
  
  let activeButtons = derived(allButtons, ($allButtons) => {
    // console.log($allButtons.map( b => ))
    const filtered =  $allButtons.filter( b => ContentStore.cellExists(b.value))
    return filtered
  })
</script>

<div class="fixed bottom-0 w-full" style:z-index={99999}>
  <div class="flex justify-evenly align-middle h-28">
    {#each $allButtons as button}
      <div class="flex flex-col justify-between">
          <button
            class="disabled:text-gray-500 lowercase font-thin px-3 disabled:line-through m-auto"
            disabled={!ContentStore.cellExists(button.value)}
            on:click={button.fn}
          >
            {button.text}
          </button>
      </div>
    {/each}
  </div>
</div>
