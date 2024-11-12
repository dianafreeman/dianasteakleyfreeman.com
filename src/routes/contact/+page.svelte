<script>
  import { default as ContactForm } from "$lib/components/Forms/ContactForm.svelte";
  export const prerender = true;
</script>

<div class="relative flex min-h-[75vh] flex-col justify-center bg-black">
  <ContactForm title="Let's Connect" />
</div>
