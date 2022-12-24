<script>
  import LandingSection from "$lib/components/LandingSection.svelte";
  import { default as ContactForm } from "$lib/components/Forms/ContactForm.svelte";
  import Typewriter from "svelte-typewriter/Typewriter.svelte";
</script>

<LandingSection fadeInWhenVisible={false} class="relative justify-center ">
  <h1 class="heading mx-auto w-2/3 text-center lowercase">let's connect.</h1>

  <ContactForm />
</LandingSection>
