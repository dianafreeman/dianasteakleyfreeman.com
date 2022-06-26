<script>
  export let section;
  export let index;
</script>

<div class="p-3 text-white h-full w-full flex items-end">
  <div class="h-3/5 relative">
    <h1 class="font-bold text-6xl xl:text-7xl">
      {@html section.title}
    </h1>

    <h2 class="text-transparent-60 font-manrope text-3xl lg:text-4xl xl:text-5xl py-3">
      {`0${index + 1}.`}
    </h2>
    <p class="font-manrope text-xl">{section.description}</p>
  </div>
</div>
