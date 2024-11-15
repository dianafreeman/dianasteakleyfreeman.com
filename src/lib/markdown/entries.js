import { getAllEntryMeta, readEntry } from "./metadata";
import { marked } from 'marked';
export function getEntryBy(key, value) {
  const { filePath } = getEntriesBy(key, value)[0]; // asume first entry is the target one
  const data = readEntry(filePath, true);
  const html = marked.parse(data.content)
  return {...data, content: html};
}

export function getEntriesBy(key, value) {
  const all = getAllEntryMeta();
  const matchingMeta = all.filter((e) => {
    const metaEntries = Object.entries(e);
    const matchingEntries = metaEntries.filter(([k, v]) => {
      const basicMatch = v === value;
      const arrayMatch = Object.values(v).includes(value);
      return k === key && (basicMatch || arrayMatch);
    });
    return matchingEntries.length > 0
  });
  return matchingMeta;
}
