import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BASE_DIR, METADATA } from "./constants";

/**
 * Retrieve metadata by slug, title, or a matching alias.
 * @param {string} type The type of metadata ('tags', 'categories', 'contentTypes').
 * @param {Object} params An object containing either the slug, title, or alias to search by.
 * @returns {Object|null} The metadata object, or null if not found.
 */
export function getMetadataByAttribute({ slug, title, alias }) {
  // console.log(METADATA)
  return (
    METADATA.find((item) => {
      return (
        (slug && item?.slug === slug) ||
        (title && item?.title === title) ||
        (alias && item?.aliases && item.aliases.includes(alias))
      );
    }) || null
  );
}
/**
 * Recursively walks through a directory and applies a callback for each file.
 * @param {string} dir The directory to walk through.
 * @param {function} callback The function to apply on each file.
 */
export function walkDirectory(dir, callback) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDirectory(filePath, callback);
    } else {
      callback(filePath);
    }
  });
}

/**
 * Checks if a file is a Markdown file.
 * @param {string} file The file name.
 * @returns {boolean} True if the file is a Markdown file, false otherwise.
 */
export function isMarkdownFile(file) {
  return file.endsWith(".md");
}


/**
 * Reads the content of a file and extracts its front matter.
 * @param {string} filePath The path of the file to read.
 * @returns {Object} The extracted front matter and the content.
 */
export function readMarkdownFile(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return { metadata: data, content };
}

/**
 * Recursively search for a markdown file matching the slug in a given directory.
 * @param {string} slug The slug to find.
 * @param {string} dir The directory to search in.
 * @returns {string | null} The path to the file if found, null otherwise.
 */
export function findMarkdownFile(name, dir = BASE_DIR) {
  let result = null;

  walkDirectory(dir, (filePath) => {
    if (isMarkdownFile(filePath) && path.basename(filePath) === `${name}.md`) {
      result = filePath;
    }
  });

  return result;
}

/**
 * Recursively search for a markdown file matching the slug in a given directory.
 * @param {string} slug The slug to find.
 * @param {string} dir The directory to search in.
 * @returns {string | null} The path to the file if found, null otherwise.
 */
export function findMarkdownFileBy(key, value, dir = BASE_DIR) {
  let result = null;

  walkDirectory(dir, (filePath) => {
    if (isMarkdownFile(filePath)) {
      const data = readMarkdownFile(filePath);
      const { metadata } = data;
      if (metadata[key] == value) {
        result = filePath;
      }
    }
  });

  return result;
}

/**
 * Collect front matter from markdown files and filter them by a specific key (e.g., category or tag).
 * @param {string} dir The base directory to search in.
 * @param {string} key The key to filter by (e.g., 'category', 'tags').
 * @param {string} value The value to match for the key (e.g., a specific category or tag).
 * @returns {Array<Object>} A list of files with their front matter matching the given key and value.
 */
export function collectFrontMatterByKey(key, value, dir = BASE_DIR) {
  const list = [];

  walkDirectory(dir, (filePath) => {
    if (isMarkdownFile(filePath)) {
      const { metadata } = readMarkdownFile(filePath);
      // Check if the front matter contains the specified key
      if (metadata[key]) {
        if (Array.isArray(metadata[key])) {
          // If the value is an array, check if it includes the specified value
          if (metadata[key].includes(value)) {
            list.push({
              fileName: path.basename(filePath),
              metadata: getFrontmatterMeta(metadata)
            });
          }
        } else if (metadata[key] === value) {
          // If the value is scalar, check for equality
          list.push({
            fileName: path.basename(filePath),
            metadata: getFrontmatterMeta(metadata)
          });
        }
      }
    }
  });

  return list;
}

/**
 * Collect front matter from markdown files, organizing them by the directory (type) they reside in.
 * @param {string} dir The base directory to search in.
 * @returns {Array<Object>} A list of objects containing the file name, type (directory), and front matter.
 */
export function collectFrontMatterByType(dir) {
  const frontMatterByType = [];

  walkDirectory(dir, (filePath) => {
    if (isMarkdownFile(filePath)) {
      const { frontMatter } = readMarkdownFile(filePath);

      // Extract the directory name as the type
      const type = path.basename(path.dirname(filePath));

      // Add the front matter along with the file name and type
      frontMatterByType.push({
        fileName: path.basename(filePath),
        type, // Directory name is treated as "type"
        frontMatter
      });
    }
  });

  return frontMatterByType;
}

function getFrontmatterMeta(data){
  const entries = Object.entries(data).map(entry => {
    const [key, value] = entry
    const m = getMetadataByAttribute({title: value, slug: value, alias: value})
    if (m) return [key, m]
    return entry
  })
  return Object.fromEntries(entries)
}

/**
 * Filter markdown files by a specified front matter field.
 * @param {string} dir The base directory to start from.
 * @param {string} field The front matter field to check (e.g., 'tags', 'category').
 * @param {Object} metadata The metadata object containing slug, title, and aliases.
 * @returns {Array<Object>} A list of matching files with their front matter (metadata).
 */
export function filterMarkdownFilesByMetadataField(
  field,
  data,
  dir = BASE_DIR
) {
  const matchingFiles = [];

  walkDirectory(dir, (filePath) => {
    if (isMarkdownFile(filePath)) {
      const { metadata: frontMatter } = readMarkdownFile(filePath);
      // Check if the field exists in the front matter and if it matches the metadata
      if (frontMatter[field]) {
        if (Array.isArray(frontMatter[field])) {
          // Handle array fields (e.g., tags)
          if (
            frontMatter[field].some(
              (value) =>
                value === data.slug ||
                value === data.title ||
                value === data ||
                (data.aliases && data.aliases.includes(value))
            )
          ) {
            matchingFiles.push({
              fileName: path.basename(filePath),
              metadata: getFrontmatterMeta(frontMatter)
            });
          }
        } else {
          // Handle scalar fields (e.g., category)
          if (
            frontMatter[field] === data.slug ||
            frontMatter[field] === data.title ||
            frontMatter[field] === data ||
            (data.aliases && data.aliases.includes(frontMatter[field]))
          ) {
            
            matchingFiles.push({
              fileName: path.basename(filePath),
              metadata: getFrontmatterMeta(frontMatter)
            });
          }
        }
      }
    }
  });

  return matchingFiles;
}

export function getMarkdownFilesByContentType(typeMetadata) {
  const typeDir = path.join(BASE_DIR, typeMetadata.slug); // Directory for the content type
  console.log(`Searching in directory: ${typeDir}`);

  // Check if the directory exists
  if (!fs.existsSync(typeDir)) {
    return new Response(JSON.stringify([]), {
      headers: { "Content-Type": "application/json" }
    });
  }

  // Collect all the front matter (metadata) for markdown files in the content type directory
  const matchingFiles = [];
  walkDirectory(typeDir, (filePath) => {
    if (isMarkdownFile(filePath)) {
      const { metadata } = readMarkdownFile(filePath);
      matchingFiles.push({
        fileName: path.basename(filePath),
        metadata: getFrontmatterMeta(metadata)
      });
    }
  });

  return matchingFiles;
}
