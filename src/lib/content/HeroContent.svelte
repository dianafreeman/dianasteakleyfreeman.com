<script>
  export let section;
  export let index;
</script>

<div class="p-6 text-white h-full flex items-end">
  <div class="h-4/5 relative">
    <h1 class="font-bold text-6xl xl:text-7xl">
      {@html section.title}
    </h1>

    <h2 class="text-transparent-60 font-manrope text-3xl lg:text-4xl xl:text-5xl py-3">
      {`0${index + 1}.`}
    </h2>
    <p class="font-manrope text-xl">{section.description}</p>

    <div style="height: 650px; background: blue">

      </div>
    <!-- <button class="bg-white text-black p-2 rounded my-3">{section.verb} {section.categoryName}</button> -->
    <!-- <h3 class="uppercase font-thin absolute text-gray-700 text-8xl bottom-10">{section.verb}</h3> -->
  </div>
</div>
