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
    title: "Code",
    description:
      "Code Projects by Diana M Steakley-Freeman | Most of my professional work is owned by the organizations for which I have worked....but not all of them! Check out my open source work here. ",
    slug: "code",
    image: null,
    navigationText: "code"
  },
  {
    title: "Art & Design",
    description:
      "Art, and Design by Diana | I'm not a professional artist, but I sure do enjoy the craft. View the gallery.",
    slug: "art-and-design",
    image: null,
    navigationText: "art",
    aliases: ["art-design, art-&-music"],

  }
];

const tagsMeta = [
  { 
    title: "History",
    slug: "history"
  },
  {
    title: "The Attention Economy",
    slug: "attention-economy",
    aliases: ["attention economy"]
  },
  {
    title: "Black Historytelling U.S. tour",
    slug: "black-history-tour",
    aliases: ["black historytelling us tour"]

  },
  {
    title: "Digital Mental Health",
    slug: "digital-mental-health",
    aliases: ["mental-health", "digital-health", "digital mental health"]
  },
  { 
    title: "ReactJS",
    slug: "react"
  },
  { 
    title: "Music",
    slug: "music"
  },
  { 
    title: "Graphic Design",
    slug: "graphic-design",
    aliases: ["graphic design"]
  },
];

export const META_DETAILS = [...tagsMeta, ...categoryMeta, ...contentTypesMeta]