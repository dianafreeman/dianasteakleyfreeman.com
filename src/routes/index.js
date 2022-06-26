import IntroComponent from "$lib/content/Intro.svelte";
import ListContent from "$lib/content/SectionContent.svelte";
import HeroContent from "$lib/content/SectionHero.svelte";

export const FIRST_ROW = [
  {
    title: "Intro",
    component: IntroComponent
  }
];

export const SECOND_ROW = [
  {
    component: HeroContent,
    title: "Coder",
    description: "(v.) To dance between the lines of art, science, and opinion.",
    verb: "Browse",
    categoryName: "Projects"
  },
  {
    component: HeroContent,
    title: "Creator",
    description: "Something creative",
    verb: "Discover",
    categoryName: "Gallery"
  },
  {
    component: HeroContent,
    title: "Commu&shy;nicator",
    description: "Lorem upsum even better",
    verb: "Read",
    categoryName: "Posts"
  }
];

export async function load({ url, params, fetch, session, stuff }) {
  return {
    status: response.status,
    props: {
      contentGrid: [FIRST_ROW, SECOND_ROW]
    }
  };
}
