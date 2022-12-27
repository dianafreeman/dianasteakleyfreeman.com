<script>

  export let id;
  export let value = ""
  export let required = false;
  export let name = id;

  let focused;

</script>

<textarea
  class="borders text-gray-700 mb-3 min-h-[200px] w-full bg-black py-3 px-4 leading-tight focus:outline focus:outline-gray active:outline"
  {id}
  {name}
  on:focus={() => (focused = true)}
  on:blur={() => (focused = false)}
  {required}
  bind:value />
