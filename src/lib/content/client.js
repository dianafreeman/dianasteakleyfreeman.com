// https://contentful.github.io/contentful.js/contentful/10.4.2/
import contentful from "contentful";

const client = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
});


export default client;