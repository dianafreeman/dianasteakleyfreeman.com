<script>
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

{#each navMenus as menu}
  <div class={menu.containerClass}>
    <p class="font-black lowercase">{menu.title}.</p>
    <ul class={menu.class}>
      {#each menu.items as item}
        <li class="lowercase font-extralight text-lightest-gray">
          <a href={item.href} class="hover:underline focus:underline active:underline hover:text-sky-blue active:text-sky-blue focus:text-sky-blue outline-none">
            {item.text}
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/each}

<div class="flex-grow text-left lowercase">
  <p class="font-bold">Diana M Steakley-Freeman. &copy; 2024</p>

  <a
    href="https://github.com/dianafreeman/dianasteakleyfreeman.com"
    class="font-thin text-lightest-gray hover:underline focus:underline active:underline hover:text-sky-blue active:text-sky-blue focus:text-sky-blue outline-none">
    View this site on github.
  </a>
</div>
