export function stripAllButSpacesAndAlphaNumeric(string) {
  return string
    .toLowerCase()
    .replaceAll(/[^\sa-z0-9]/gi, "")
    .replaceAll(/\s/g, "-");
}

export function kebabCaseToTitleCase(string) {
  return string
    .replaceAll("-", " ")
    .replaceAll(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
    .replaceAll("Historytelling Us", "Historytelling US")
    .replaceAll("the Us", "the US");
}
