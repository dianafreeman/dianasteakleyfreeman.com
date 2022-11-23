<script>
  import NavList from "./LinkList.svelte";
  const navMenus = [
    {
      title: "navigation",
      containerClass: "w-1/2 mb-8",
      items: [
        {
          href: "/",
          text: "Home"
        },
        {
          href: "/gallery",
          text: "Gallery"
        },
        {
          href: "/blog",
          text: "Blog"
        },
        {
          href: "/resources",
          text: "Resources"
        }
      ]
    },
    {
      title: "Terms",
      containerClass: "w-1/2 mb-8",
      items: [
        {
          href: "/privacy-statement",
          text: "Privacy Statement"
        },
        {
          href: "/feedback",
          text: "Report A Problem"
        }
      ]
    },
    {
      title: "Links",
      containerClass: "w-1/2 mb-8",
      class: "flex flex-row",
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
          href: "https://www.tiktok.com/@diana_rises",
          text: "TikTok"
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

  <p class="flex-grow text-left font-bold lowercase ">Diana M Steakley-Freeman. &copy; 2023</p>
</div>
