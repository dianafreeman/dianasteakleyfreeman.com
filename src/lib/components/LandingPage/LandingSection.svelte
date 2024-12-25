<script>
	import { createEventDispatcher } from "svelte";
  import Section from "../Section.svelte";
	import ButtonLink from '$lib/components/Buttons/ButtonLink.svelte';

	export let id;
	export let description;
	export let buttonLabel;
	export let buttonTarget;

  const dispatch = createEventDispatcher()

  function handleSectionEnterView(){
    dispatch("sectionEnteredView")
  }
  function handleSectionExitView(){
    dispatch("sectionExitedView")
  }
</script>

<Section
	{id}
	class="flex h-screen flex-col justify-center border-t border-dark-gray px-5 py-10 md:px-0"
	on:viewEnter={handleSectionEnterView}
	on:viewExit={handleSectionExitView}
>
	<slot name="content"></slot>

	<div class="mx-auto h-fit md:w-2/3 px-10 text-center">
		<slot name="description"></slot>
	 {#if description}
		<p class="">{description}</p>
{/if}
	<ButtonLink
		href={buttonTarget}
		borders
		animateBorders
		class="my-10 w-fit bg-yellow p-5 font-bold text-black"
		iconProps={{ type: 'next' }}
	>
		{buttonLabel}
	</ButtonLink>
</div>
</Section>
