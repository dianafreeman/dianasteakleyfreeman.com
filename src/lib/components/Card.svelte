<script>
  export let color;
  export let title;
  export let description;
</script>

<li class="flex w-full lg:w-1/2 xl:w-1/3">
  <p class="text-4xl m-1 pr-2">01</p>
  <div class="border-l-8 pl-5" style="border-color: {color};">
    <p class="p-1 text-bold text-2xl">{title}</p>
    <img
      class="my-3"
      width="300"
      height="200"
      alt="project capture"
      src="https://picsum.photos/300/200"
    />
    <p class="font-manrope">
      {description}
    </p>
  </div>
</li>
