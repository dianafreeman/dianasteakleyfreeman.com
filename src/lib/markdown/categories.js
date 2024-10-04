import { BASE_DIR } from "./constants";
import {
  walkDirectory,
  isMarkdownFile,
  readMarkdownFile,
  getMetadataByAttribute
} from "./utils";
import path from "path";
/**
 * Collect all unique categories from markdown files.
 * @param {string} dir The base directory to search in.
 * @returns {Array<string>} A list of unique categories found in the markdown files.
 */
export function collectAllCategories(dir = BASE_DIR) {
  const categories = new Set();

  walkDirectory(dir, (filePath) => {
    if (isMarkdownFile(filePath)) {
      const { metadata } = readMarkdownFile(filePath);

      if (metadata.category) {
        categories.add(metadata.category);
      }
    }
  });

  return Array.from(categories).map((category) => {
    const metadata =
      getMetadataByAttribute("categories", {
        title: category,
        slug: category,
        alias: category
      }) || {};
    return {
      category,
      metadata
    };
  });
}

export function collectFrontmatterByCategory(categoryMetadata) {
  // Collect all the front matter (metadata) for markdown files that match the category
  const matchingFiles = [];

  walkDirectory(BASE_DIR, (filePath) => {
    if (isMarkdownFile(filePath)) {
      const { metadata } = readMarkdownFile(filePath);

      if (
        metadata.category &&
        (metadata.category === categoryMetadata.slug ||
          metadata.category === categoryMetadata.title ||
          (categoryMetadata.aliases &&
            categoryMetadata.aliases.includes(metadata.category)))
      ) {
        matchingFiles.push({
          fileName: path.basename(filePath),
          metadata
        });
      }
    }
  });
  return matchingFiles
}
