<script>
  import { writable } from "svelte/store";

  const CONSENT_TYPES = {
    GRANTED: "granted",
    DENIED: "denied",
  }
  const DEFAULT_CONSENT = { 
    ad_storage: CONSENT_TYPES.DENIED,
    functionality_storage: CONSENT_TYPES.GRANTED,
    personalization_storage: CONSENT_TYPES.DENIED,
    security_storage: CONSENT_TYPES.GRANTED
  }
  const consent = writable(DEFAULT_CONSENT)
 

  const GTAG_EXISTS = typeof gtag !== "undefined"
  $: {
    if (GTAG_EXISTS) {
      gtag("consent", "update", $consent);
    }
  }
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-XJ9F4KFS75"></script>

  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
      gtag("consent", DEFAULT_CONSENT);
    }

    gtag("js", new Date());

    gtag("config", import.meta.env.GA_MEASUREMENT_ID);
  </script>
</svelte:head>
