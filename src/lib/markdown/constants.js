import path from "path"

export const BASE_DIR = path.join("markdown"); // Base directory for Markdown content

const contentTypesMeta = [
  {
    title: "Projects",
    description:
      "Projects by Diana M Steakley-Freeman | To be a coder is to be a creator. Browse Projects, Poetry, Art, Design, and Photography",
    slug: "projects",
    image: null,
    navigationText: "Projects"
  },
  {
    title: "Blog",
    description:
      "Blog by Diana M Steakley-Freeman | To be a coder is to be a creator. Browse Projects, Poetry, Art, Design, and Photography",
    slug: "blog",
    image: null,
    navigationText: "Blog"
  },
  {
    title: "Resources",
    description:
      "Resources collected by Diana M Steakley-Freeman | Current Events, Civic Engagment, Tutorials, & Helpful Links",
    slug: "resources",
    image: null,
    navigationText: "Blog"
  }
];

const categoryMeta = [
  {
    title: "Science",
    description:
      "Journal Articles, Book Chapters, and other Academic work by Diana M Steakley-Freeman.",
    slug: "science",
    image: null,
    navigationText: "Science",
    aliases: ["research", "academic-work"],
  },
  {
    title: "Design",
    description:
      "Graphic Design Archive - Diana M Steakley-Freeman | I haven't worked as a designer in years, but I still enjoy the craft. ",
    slug: "design",
    image: null,
    navigationText: "Design",
    aliases: ["graphic-design", "visual-art"],
  },
  {
    title: "Code",
    description:
      "Code Projects by Diana M Steakley-Freeman | Most of my professional work is owned by the organizations for which I have worked....but not all of them! Check out my open source work here. ",
    slug: "code",
    image: null,
    navigationText: "code"
  },
  {
    title: "Art & Music",
    description:
      "Art and Music by Diana | I'm not a professional artist, but I sure do enjoy the craft. View the gallery.",
    slug: "art-and-music",
    image: null,
    navigationText: "art",
    aliases: ["art-music, art-&-music"],

  }
];

const tagsMeta = [
  { 
    title: "History",
    slug: "history"
  },
  {
    title: "The Attention Economy",
    slug: "attention-economy"
  },
  {
    title: "Digital Mental Health",
    slug: "digital-mental-health",
    aliases: ["mental-health", "digital-health"]
  },
  { 
    title: "ReactJS",
    slug: "react"
  },
  { 
    title: "Graphics & Illustration",
    slug: "graphics-and-illustration"
  },
  {
    title: "Peer Reviewed Publications",
    slug: "peer-reviewed"
  }
];

export const METADATA = {tags: tagsMeta, categories: categoryMeta, contentTypes: contentTypesMeta}