<script>
  import NavList from "./Nav/NavList.svelte";
  const navMenus = [
    {
      title: "main navigation",
      containerClass: "w-1/2 mb-8",
      items: [
        {
          href: "/",
          text: "Home"
        },
        {
          href: "/projects",
          text: "Projects"
        },
        {
          href: "/blog",
          text: "Blog"
        },
        {
          href: "/resources",
          text: "Resources"
        },
        {
          href: "/contact",
          text: "Contact"
        }
      ]
    },
    {
      title: "Trust",
      containerClass: "w-1/2 mb-8",
      items: [
        {
          href: "/privacy",
          text: "Privacy"
        },
        {
          href: "/feedback",
          text: "Feedback"
        }
      ]
    },
    {
      title: "Links",
      containerClass: "w-1/2 ",
      class: "flex flex-row gap-2",
      items: [
        {
          href: "https://github.com/dianafreeman",
          text: "GitHub"
        },
        {
          href: "https://twitter.com/dianasfreeman",
          text: "Twitter"
        },
        {
          href: "https://www.linkedin.com/in/dianasteakleyfreeman/",
          text: "linkedin"
        }
      ]
    }
  ];
</script>

<div class="flex flex-row flex-wrap justify-between ">
  {#each navMenus as menu}
    <div class={menu.containerClass}>
      <NavList title={menu.title} items={menu.items} class={menu.class} />
    </div>
  {/each}
  <div class="flex-grow text-left lowercase">
    <p class="font-bold">Diana M Steakley-Freeman. &copy; 2023</p>
    <a
      href="https://github.com/dianafreeman/dianasteakleyfreeman.com"
      class="font-thin">
      View this site on github.
    </a>
  </div>
</div>
