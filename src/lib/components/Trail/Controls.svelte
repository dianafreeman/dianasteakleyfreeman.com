<script>
  import TrailStore from "$stores/TrailStore";

  const { skip, paused, finished, pauseOrResume } = TrailStore;
</script>

<button on:click={skip}>skip</button>
<button disabled={finished} on:click={pauseOrResume}>{paused ? "resume" : "pause"}</button>
