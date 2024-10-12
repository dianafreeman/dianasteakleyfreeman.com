  

  export async function load({ fetch, params }) {
    const res = await fetch(`/api/content/contentTypes/projects`);
    const entries = await res.json();
    return { entries }
  }