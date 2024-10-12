  

  export async function load({ fetch }) {
    const res = await fetch(`/api/content/contentTypes/resources`);
    const entries = await res.json();
    return { entries }
  }