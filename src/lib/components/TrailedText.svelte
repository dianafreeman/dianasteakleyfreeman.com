<script>
  import Trail from "../components/Trail/index.svelte";
  import TrailStore from "./Trail/store";
</script>

<Trail items={$TrailStore} />
