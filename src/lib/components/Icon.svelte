<script>
  // https://icons8.com/line-awesome

  let clazz;
  export { clazz as class };
  export let type;

  export let large = false;
  export let dontHide = false;

  const ICON_CLASS_MAP = {
    settings: "la-ellipsis-v",
    expand: "la-angle-down",
    collapse: "la-angle-up",
    next: "la-angle-right",
    externalLink: "la-external-link-alt",
    menu: "la-bars",
    close: "la-times",
    check: "la-check",
    square: "la-stop",
    copyLink: "la-clipboard",
    filter: "la-filter",
    important: "la-exclamation-circle",
    question: "la-question-circle"
  };

  $: iconType = type;
</script>

<i
  aria-hidden={dontHide ? null : true}
  class="las {ICON_CLASS_MAP[iconType]} {large && 'text-2xl'} {clazz}" />
