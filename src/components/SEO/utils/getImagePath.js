const getImagePath = (imageURI, config) => {
  if (
    !imageURI?.match(
      `(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]`
    )
  )
    return `${config.siteUrl}${config.pathPrefix}${imageURI}`;
  return imageURI;
};

export default getImagePath;
