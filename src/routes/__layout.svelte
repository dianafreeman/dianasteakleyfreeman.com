<script>
  import TopNav from "$lib/components/TopNav.svelte";
  import "normalize.css";
  import "../app.css";

  let slides = [
    {
      title: "Coder",
	  color: "red",
      description: "(v.) To dances between the lines of art, science, and opinion."
    },
    {
      title: "Creator",
	  color: "blue",
      description: "Something creative"
    },
    {
      title: "Communicator",
	  color: "yellow",
      description: "Lorem upsum even better"
    }
  ];
</script>

<main class="bg-black h-screen w-screen relative font-poppins">
  <nav>
    <TopNav {slides}/>
  </nav>

  <slot />
</main>
