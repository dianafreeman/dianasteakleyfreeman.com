<script>
  import LayoutStore from "$stores/LayoutStore";
  import SolidCircleLeft from "$lib/icons/solidCircleLeft.svelte";
  import SolidCircleUp from "$lib/icons/solidCircleUp.svelte";
  import SolidCircleDown from "$lib/icons/solidCircleDown.svelte";
  import SolidCircleRight from "$lib/icons/solidCircleRight.svelte";
  import ContentStore from "$stores/ContentStore";
  import { derived } from "svelte/store";

  const { incrementRow, decrementRow, incrementCol, decrementCol } = LayoutStore;

  const actionButtonGroups = derived(LayoutStore, ($LayoutStore) => {
    return [
      [
        {
          id: "scrollLeft",
          text: "left",
          value: { x: $LayoutStore.x - 1, y: $LayoutStore.y },
          component: SolidCircleLeft,
          fn: decrementCol
        }
      ],
      [
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
        }
      ],
      [
        {
          id: "scrollRight",
          text: "right",
          value: { x: $LayoutStore.x + 1, y: $LayoutStore.y },
          component: SolidCircleRight,
          fn: incrementCol
        }
      ]
    ];
  });
</script>

<div class="fixed bottom-24 right-3 w-full" style:z-index={99999}>
  <div class="flex justify-center align-middle h-28">
    {#each $actionButtonGroups as buttonGroup}
      <div
        class="flex flex-col"
        class:justify-center={buttonGroup.length === 1}
        class:justify-between={buttonGroup.length > 1}
      >
        {#each buttonGroup as button}
          <button
            class="disabled:text-gray-500 lowercase font-thin px-3 disabled:line-through m-auto"
            disabled={!ContentStore.cellExists(button.value)}
            on:click={button.fn}
          >
            <span>{button.text}</span>
            
              <span class="sr-only">{button.text}</span>
                <svelte:component this={button.component} />
          </button>
        {/each}
      </div>
    {/each}
  </div>
</div>
