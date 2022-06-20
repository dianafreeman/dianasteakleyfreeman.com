<script>
  import LayoutStore from "$stores/LayoutStore";

  export let onClickCallback;

  const { setCell } = LayoutStore;
  function onClick() {
    // TODO: find a way to set this using the content Store
    //     () => setCell({ x: 0, y: 1 })
    // () => setCell({ x: 1, y: 1 })
    // () => setCell({ x: 2, y: 1 })
    if (onClickCallback) onClickCallback();
  }

  let landingButtonClass =
    "text-3xl lg:text-4xl xl:text-5xl mr-2 w-full text-right p-1 hover:bg-white hover:text-black focus:bg-white focus:text-black";
</script>

<div class="relative h-full justify-evenly flex flex-col">
  <h1 class="text-5xl lg:text-6xl xl:text-8xl font-bold ">Hi. I'm Diana</h1>
  <h1 class="text-sm">
    Web Engineer. Digital Policy Buff, User Rights Enthusiast.
    Former Scientist, Forever Experimenting. Enthusiastic nerd.
  </h1>
  
</div>
