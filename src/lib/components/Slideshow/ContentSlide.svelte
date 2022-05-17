<script>
  import SlidesStore from "$stores/SlidesStore";
  import Card from "../Card.svelte";
  import { onMount } from "svelte";

  export let slide;
  export let index;
</script>

<div class="w-full h-full flex m-auto" style="left: {index * 100}vw; ">
  <div class="inline-flex w-screen py-16">
    <div class="min-h-screen p-10">
      <div class="flex flex-col p-10">
        <h2 class="font-bold text-center">{slide.categoryName}</h2>
      </div>
      <div class="flex flex-col p-10">
        <p class="text-xl font-manrope">
          Exercitation aliquip magna aute ut et consectetur aliqua minim Lorem duis enim. Id culpa
          fugiat qui nostrud duis ex adipisicing voluptate irure velit. Reprehenderit nostrud
          officia esse aliqua.
        </p>
      </div>
      <ul class="list-none w-full flex justify-evenly">
        <Card
          title="Title"
          description="Nulla cillum eu irure elit cupidatat incididunt proident qui. Non tempor cupidatat sint
        consectetur pariatur et deserunt. Incididunt occaecat incididunt voluptate aliqua labore
        reprehenderit culpa nostrud irure commodo magna. Dolor eiusmod aute pariatur mollit
        deserunt irure in laboris aliqua ut."
        />
        <Card
          title="Title"
          description="Nulla cillum eu irure elit cupidatat incididunt proident qui. Non tempor cupidatat sint
        consectetur pariatur et deserunt. Incididunt occaecat incididunt voluptate aliqua labore
        reprehenderit culpa nostrud irure commodo magna. Dolor eiusmod aute pariatur mollit
        deserunt irure in laboris aliqua ut."
        />
      </ul>
    </div>
  </div>
</div>
