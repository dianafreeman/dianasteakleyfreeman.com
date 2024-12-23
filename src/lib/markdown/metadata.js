import matter from "gray-matter";
import { META_DETAILS } from "./constants";

const markdownFiles = import.meta.glob("$content/**/*.md", {
  eager: true,
  as: "raw"
});

export function getMatchingMetaDetails(value) {
  let testValue = value;
  if (typeof value === "string" || value instanceof String) {
    testValue = value.toLowerCase();
  }

  const result = META_DETAILS.find((item) => {
    const slugMatch = item?.slug?.toLowerCase() === testValue;
    const titleMatch = item?.title?.toLowerCase() === testValue;
    const aliasMatch = item?.aliases?.some(
      (alias) => alias.toLowerCase() === testValue
    );

    return slugMatch || titleMatch || aliasMatch;
  });
  if (!result) return value
  return result
}

function decorateMetadata(obj){
  const neverDecorate = ['slug','title','date', 'draft']
  const entries = Object.entries(obj)
  const newEntries = entries.map(([key, value]) => {
    if (neverDecorate.includes(key)) return [key, value];
    if (Array.isArray(value)){
      // for arrays, e.g. tags
      const newArray =  value.map(v => getMatchingMetaDetails(v))
      return [key, newArray]
    }
    return [key, getMatchingMetaDetails(value)]
  })
  return Object.fromEntries(newEntries)
}

export function readEntry(filePath, includeContent = false) {
  const file = markdownFiles[filePath];
  const { data, content } = matter(file);
  const metadata = decorateMetadata(data)
  const pathOrContent = includeContent ? { content } : { filePath }
  return { ...metadata, ...pathOrContent};
}

export function getAllEntryMeta() {
  const metadata = [];
  for (const filePath in markdownFiles) {
    const data = readEntry(filePath);
    if (!data.draft){
      metadata.push(data);
    }
  }
  return metadata;
}

function getUniqueValues(data, key) {
  const uniqueValues = new Set();
  data.forEach((item) => {
    const value = item[key];
    if (Array.isArray(value)) {
      // If the value is an array (e.g., tags), add each item to the set
      value.forEach((v) => uniqueValues.add(v));
    } else if (value !== undefined) {
      // Add the value to the set if it exists
      uniqueValues.add(value);
    }
  });
  return Array.from(uniqueValues);
}

export function getMetaDetailsFor(key, value) {
  const metadata = getAllEntryMeta();
  const unique = getUniqueValues(metadata, key);
  const metaWithDetails = unique.map((v) => getMatchingMetaDetails(v));
  if (value) {
    return metaWithDetails.filter((v) =>
      Object.values(v).flat().includes(value)
    )[0];
  }
  return metaWithDetails;
}
