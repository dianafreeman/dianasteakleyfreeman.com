<script>
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { stringify } from "postcss";
  import { writable } from "svelte/store";

  const CONSENT_TYPES = {
    GRANTED: "granted",
    DENIED: "denied"
  };
  export const DEFAULT_CONSENT = {
    ad_storage: CONSENT_TYPES.DENIED,
    functionality_storage: CONSENT_TYPES.GRANTED,
    personalization_storage: CONSENT_TYPES.DENIED,
    security_storage: CONSENT_TYPES.GRANTED
  };

  const measurementId = import.meta.env.GA_MEASUREMENT_ID;

  if (browser) {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", measurementId, {
      page_title: document.title,
      page_path: $page.url
    });
  }
  const consent = writable(DEFAULT_CONSENT);

  const GTAG_EXISTS = typeof gtag !== "undefined";
  $: {
    if (GTAG_EXISTS) {
      gtag("consent", "update", $consent);
    }
  }
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id={measurementId}"></script>
</svelte:head>
