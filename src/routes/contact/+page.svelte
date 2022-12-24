<script>
  import LandingSection from "$lib/components/LandingSection.svelte";
  import { default as ContactForm } from "$lib/layouts/ContactForm.svelte";
</script>

<LandingSection fadeInWhenVisible={false} class="relative justify-center ">
  <ContactForm title="Let's Connect" />
</LandingSection>
