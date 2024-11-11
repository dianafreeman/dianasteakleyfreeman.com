import { walkDirectory, isMarkdownFile, readMarkdownFile, getMetadataByAttribute } from "./utils";
import { BASE_DIR } from "./constants";
/**
 * Collect all unique tags from markdown files.
 * @param {string} dir The base directory to search in.
 * @returns {Array<string>} A list of unique tags found in the markdown files.
 */
export function collectAllTags(dir = BASE_DIR) {
  const tags = new Set();

  walkDirectory(dir, (filePath) => {
    if (isMarkdownFile(filePath)) {
      const { metadata } = readMarkdownFile(filePath);

      if (!metadata.draft && metadata.tags && Array.isArray(metadata.tags)) {
        metadata.tags.forEach((tag) => tags.add(tag));
      }
    }
  });

  return Array.from(tags).map(tag => {
    const metadata = getMetadataByAttribute({ slug: tag, title: tag, alias: tag }) || {};
    return {
      tag,
      metadata
    };
  });
}
