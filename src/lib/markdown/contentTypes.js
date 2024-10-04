import fs from 'fs';
import path from 'path';
import { BASE_DIR } from '$lib/markdown/constants';
import { getMetadataByAttribute } from '$lib/markdown/utils';

/**
 * Collect all subdirectory names in a given directory and treat them as "types" with their metadata.
 * @param {string} dir The base directory to start from (default: BASE_DIR).
 * @returns {Array<Object>} A list of subdirectory names (types) and their associated metadata.
 */
export function collectContentTypes(dir = BASE_DIR) {
  const types = [];

  // Read the directory contents
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // If it's a directory, treat it as a "type" and retrieve its metadata
    if (stat.isDirectory()) {
      const metadata = getMetadataByAttribute('contentTypes', { slug: file, title: file, alias: file }) || {};
      types.push({
        ...metadata,
      });
    }
  });

  return types;
}
