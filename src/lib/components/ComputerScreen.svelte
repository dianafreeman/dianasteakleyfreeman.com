<script></script>

<div class="relative flex h-full min-h-[200px] w-full rounded-md bg-neutral-800 p-2 shadow">
  <div id="buttons" class="absolute top-3 left-3 flex w-full flex-row justify-start">
    <div class="mr-2 h-3 w-3 rounded-full bg-red-500" />
    <div class="mr-2 h-3 w-3 rounded-full bg-yellow-500" />
    <div class="mr-2 h-3 w-3 rounded-full bg-green-500" />
  </div>
  <div class="w-full pb-3 pt-8 text-xl">
    <slot />
  </div>
</div>
