<script>
  let clazz
  export { clazz as class };

  let color = false
</script>

<div
  class="relative flex h-full w-full rounded-md border {color ? "bg-neutral-800" : ""} shadow">
  <div
    id="buttons"
    class="absolute top-0 left-0 py-2 px-2 flex w-full flex-row justify-start border-b ">
    <div class="mr-2 h-3 w-3 rounded-full {color ? "bg-red-500" : "outline outline-1"}"  />
    <div class="mr-2 h-3 w-3 rounded-full {color ? "bg-yellow-500" : "outline outline-1"}"  />
    <div class="mr-2 h-3 w-3 rounded-full {color ? "bg-green-500" : "outline outline-1"}"  />
  </div>
  <div class="w-full pb-3 pt-8 text-xl">
    <slot />
  </div>
</div>
