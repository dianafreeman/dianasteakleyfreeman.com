<script>
  // https://icons8.com/line-awesome

  let clazz;
  export { clazz as class };
  export let type;

  export let large = false;
  export let dontHide = false;

  const ICON_CLASS_MAP = {
    check: "la-check",
    close: "la-times",
    collapse: "la-angle-up",
    cookie: "la-cookie",
    copyLink: "la-clipboard",
    expand: "la-angle-down",
    externalLink: "la-external-link-alt",
    filter: "la-filter",
    important: "la-exclamation-circle",
    menu: "la-bars",
    next: "la-angle-right",
    question: "la-question-circle",
    settings: "la-ellipsis-v",
    square: "la-stop",
  };

  $: iconType = type;
</script>

<i
  aria-hidden={dontHide ? null : true}
  class="las {ICON_CLASS_MAP[iconType]} {large && 'text-2xl'} {clazz}" />
