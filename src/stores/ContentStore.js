import { readable } from "svelte/store";
import IntroComponent from "$lib/content/Intro.svelte";
import LandingComponent from "$lib/content/Landing.svelte";
import SectionComponent from "$lib/content/Section.svelte";

export const CONTENT_HEROES = [
  {
    component: SectionComponent,
    title: "Coder",
    description: "(v.) To dance between the lines of art, science, and opinion.",
    categoryName: "Projects",
    categoryItems: [
      { title: "title 1", category: "code", slug: "/projects/title-1" },
      { title: "title 2", category: "graphics", slug: "/projects/title-2" },
      { title: "title 3", category: "code", slug: "/projects/title-2" },
      { title: "title 4", category: "writing", slug: "/blog/title-4" },
      { title: "title 5", category: "writing", slug: "/blog/title-5" },
      { title: "title 6", category: "graphics", slug: "/projects/title-6" }
    ]
  },
  {
    component: SectionComponent,
    title: "Creator",
    description: "Something creative",
    categoryName: "Gallery",
    categoryItems: [
      { title: "title 1", category: "code", slug: "/projects/title-1" },
      { title: "title 2", category: "graphics", slug: "/projects/title-2" },
      { title: "title 3", category: "code", slug: "/projects/title-2" },
      { title: "title 4", category: "writing", slug: "/blog/title-4" },
      { title: "title 5", category: "writing", slug: "/blog/title-5" },
      { title: "title 6", category: "graphics", slug: "/projects/title-6" }
    ]
  },
  {
    component: SectionComponent,
    title: "Commu&shy;nicator",
    description: "Lorem upsum even better",
    categoryName: "Posts",
    categoryItems: [
      { title: "title 1", category: "code", slug: "/projects/title-1" },
      { title: "title 2", category: "graphics", slug: "/projects/title-2" },
      { title: "title 3", category: "code", slug: "/projects/title-2" },
      { title: "title 4", category: "writing", slug: "/blog/title-4" },
      { title: "title 5", category: "writing", slug: "/blog/title-5" },
      { title: "title 6", category: "graphics", slug: "/projects/title-6" }
    ]
  }
];

const Intro = [{ title: "Intro", component: IntroComponent }]
const Landing = [{ title: "Hi! I'm Diana", component: LandingComponent }]
const Sections = CONTENT_HEROES

const CONTENT = [
  Intro,
  Landing,
  Sections,
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