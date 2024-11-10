<script>
export let title
export let description
export let date
export let imageSrc
</script>

<div class="max-w-sm w-full lg:max-w-full lg:flex m-3">
  <div class="h-48 outline outline-1 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('{imageSrc}')" title="Woman holding a mug">
  </div>
  <div class="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <div class="text-gray-900 font-bold text-xl mb-2">{title}</div>
      <p class="text-gray-700 text-base">{description}</p>
    </div>
    <div class="flex items-center">
      <!-- <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"> -->
      <div class="text-sm">
        <p class="text-gray-600">{date}</p>
      </div>
    </div>
  </div>
</div>