<script>
  import NavLink from "./NavLink.svelte";
</script>

<NavLink
  href="/"
  props={{ "aria-label": "Diana" }}
  class="mb-0 m-2 pt-2 pb-0 text-2xl lg:text-3xl xl:text-4xl inline-flex font-bold"
>
  <span aria-hidden="true">D</span><span aria-hidden="true" class="text-gray-400">iana</span>.
</NavLink>
