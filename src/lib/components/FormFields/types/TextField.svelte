<script>
  /** @type { string } string to associate label and input */
  export let id;
  /** @type { string } */
  export let value;
  /** @type { bool } */
  export let required;
  /** @type { string } */
  export let error;

  let focused;
</script>

<input
  class="{error
    ? 'border-2 border-red-400'
    : 'borders'} text-gray-700 mb-3 w-full bg-black py-3 px-4 leading-tight focus:outline focus:outline-gray active:outline"
  {id}
  {required}
  on:focus={() => (focused = true)}
  on:blur={() => (focused = false)}
  bind:value />
