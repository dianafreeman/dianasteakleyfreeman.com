function lazyImageSource(src, pageStore) {
  const IMAGE_HOST = "https://dianasteakleyfreeman.com";

  let pageOrigin = import.meta.env.STORYBOOK ? "/" : pageStore.url.origin;

  let imageRoot = pageOrigin !== IMAGE_HOST ? IMAGE_HOST : "";
  let fullSrc = `${imageRoot}${src || ""}`;

  let placeholderImage = `${fullSrc}?nf_resize=fit&w=50`;
  let image = `${fullSrc}?nf_resize=fit&w=700`;

  return {
    placeholderImage,
    image
  };
}

export default lazyImageSource;
