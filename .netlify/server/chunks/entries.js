import { r as readEntry, g as getAllEntryMeta } from "./response.js";
function getEntryBy(key, value) {
  const { filePath } = getEntriesBy(key, value)[0];
  const data = readEntry(filePath, true);
  return data;
}
function getEntriesBy(key, value) {
  const all = getAllEntryMeta();
  const matchingMeta = all.filter((e) => {
    const metaEntries = Object.entries(e);
    const matchingEntries = metaEntries.filter(([k, v]) => {
      const basicMatch = v === value;
      const arrayMatch = Object.values(v).includes(value);
      return k === key && (basicMatch || arrayMatch);
    });
    return matchingEntries.length > 0;
  });
  return matchingMeta;
}
export {
  getEntriesBy as a,
  getEntryBy as g
};
