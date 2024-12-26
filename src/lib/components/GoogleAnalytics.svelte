<script>
  /* eslint-disable */
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { readable } from "svelte/store";

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

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (browser){

    // TODO - setup consent
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', measurementId);
  }
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id={measurementId}"></script>
</svelte:head>
