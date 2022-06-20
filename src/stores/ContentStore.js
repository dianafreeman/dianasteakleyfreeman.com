import { readable } from "svelte/store";
import IntroComponent from "$lib/content/Intro.svelte";
import LandingComponent from "$lib/content/Landing.svelte";
import HeroContent from "$lib/content/HeroContent.svelte";

export const CONTENT_HEROES = [
  {
    component: HeroContent,
    title: "Coder",
    description: "(v.) To dance between the lines of art, science, and opinion.",
    verb: "Browse",
    categoryName: "Projects",
  },
  {
    component: HeroContent,
    title: "Creator",
    description: "Something creative",
    verb: "Discover",
    categoryName: "Gallery",
  },
  {
    component: HeroContent,
    title: "Commu&shy;nicator",
    description: "Lorem upsum even better",
    verb: "Read",
    categoryName: "Posts",
  }
];

const Intro = [{ title: "Intro", component: IntroComponent }]
const HeroSections = CONTENT_HEROES

const CONTENT = [
  Intro,
  HeroSections,
]

function createContentStore() {
  const { subscribe } = readable(CONTENT)

  let grid
  subscribe(content => grid = content)

  function cellExists(proposal) {
    if (proposal.y < 0 || proposal.x < 0) return false;
    if (!grid[proposal.y]) return false;
    if (!grid[proposal.y][proposal.x]) return false;
    return true;
  }

  return {
    subscribe,
    cellExists
  }
}

const ContentStore = createContentStore()

export default ContentStore