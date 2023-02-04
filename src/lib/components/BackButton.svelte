<script>
  import { page } from "$app/stores";
  import Button from "./Buttons/Button.svelte";

  let pageToShow;
  const paths = $page.url.pathname.split("/");
  const previous = paths[paths.length - 2];

  // TODO
  // ew. clean this up
  if (paths.includes("projects")) {
    pageToShow = "projects";
  } else if (paths.includes("blog")) {
    pageToShow = "blog";
  } else if (paths.includes("resources")) pageToShow = "resources";

  if (previous.length === 0) {
    pageToShow = "";
  }
</script>

<Button
  elementType="a"
  elementProps={{ href: `/${pageToShow}` }}
  iconProps={{ type: "back", large: true, class: "mr-4" }}
  class="mt-10 mb-auto flex h-fit w-fit items-center justify-center py-1 px-2 text-sm">
  back to {pageToShow.length ? pageToShow : "home"}
</Button>
