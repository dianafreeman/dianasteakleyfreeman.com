import path from 'path'
import { walkDirectory, isMarkdownFile, readMarkdownFile } from "./utils";

/**
 * Collect all content and metadata from markdown files across all subdirectories.
 * @param {string} dir The base directory to search in.
 * @returns {Array<Object>} A list of objects containing the file name, type (subdirectory), metadata (front matter), and content.
 */
export function collectAllContentAndMetadata(dir) {
  const allEntries = [];

  walkDirectory(dir, (filePath) => {
    if (isMarkdownFile(filePath)) {
      const { metadata, content } = readMarkdownFile(filePath);

      // Extract the directory name as the type
      const contentType = path.basename(path.dirname(filePath));

      if (!metadata.draft){
        // Add the content, metadata (front matter), and type for each file
        allEntries.push({
          fileName: path.basename(filePath),
          contentType, // The directory name is treated as the "type"
          metadata,
          content,
        });
      }
    }
  });

  return allEntries;
}
