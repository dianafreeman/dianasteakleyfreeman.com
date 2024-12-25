<script>
  import { goto } from "$app/navigation";
	import { lazyImage } from "$lib/actions/lazyImage";
  import { writable } from "svelte/store";

  export let title;
  export let description;
  export let imageName;
  export let imageAltText;
  export let tags;
  export let target;

  let card;
  let isActive = false;
  function onMouseEnter() {
    isActive = true;
  }
  function onMouseLeave() {
    isActive = false;
  }
  function onBlur() {
    isActive = false;
  }

  function onFocus() {
    isActive = true;
  }

  function onCardClick() {
    goto(target);
  }

  // TN, SM, MD, LG
  function useImageWithSize(filename, size){
    if (!size){
      return fileName
    } else { 
      const [name, extension] = filename.split(".")
      return `${name}_${size}.${extension}`
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions  -->
<div
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
  on:click={onCardClick}
  class="{isActive
    ? 'border-sky-blue'
    : 'border-white'} w-fit m-auto border break-inside-avoid mb-4 p-2 shadow-lg">
  <div class="min-w-sm max-w-sm overflow-hidden m-auto">
    {#if imageName}
      <img
        class="w-full {!isActive ? 'grayscale' : ''}"
        src={`/images/${useImageWithSize(imageName, 'SM')}`}
        alt={imageAltText} />
    {/if}
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        <a
          on:focus={onFocus}
          on:blur={onBlur}
          on:mousenter={onMouseEnter}
          on:mouseleave={onMouseLeave}
          href={`/${target}`}
          class="outline-none {isActive
            ? 'text-sky-blue'
            : 'text-white'} hover:text-sky-blue active:text-sky-blue focus:text-sky-blue"
          >{title}</a>
      </div>
      {#if description}
        <p class="text-gray-700 text-base">{description}</p>
      {/if}
    </div>
    <div class="px-6 pt-4 pb-2">
      {#if tags}
        {#each tags as tag}
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tag}
          </span>
        {/each}
      {/if}
    </div>
  </div>
</div>
