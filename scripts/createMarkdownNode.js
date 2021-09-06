/* eslint-disable no-console */
const path = require("path");
const { kebabCase } = require("lodash");
const moment = require("moment");
const siteSettings = require("../config/details/settings");

function maybeFrontmatter(node, nestedProp) {
  if (node.frontmatter) {
    return nestedProp ? node.frontmatter[nestedProp] : node.frontmatter;
  }
  return false;
}

function getFilePath(fileNode) {
  const parsedFilePath = path.parse(fileNode.relativePath);
  return parsedFilePath;
}

function slugFromPath(filePath) {
  return `/${filePath.dir}/${filePath.name}/`;
}

function maybeFilePathSlug(filePath) {
  const notSluggable = ["index", ""];
  return !notSluggable.includes(filePath.name) &&
    !notSluggable.includes(filePath.dir)
    ? slugFromPath(filePath)
    : false;
}

function slugFromTitle(title) {
  return `/${kebabCase(title)}/`;
}
function maybeDate(node) {
  const date = maybeFrontmatter(node, "date");
  const formattedDate = moment(date, siteSettings.dateFromFormat);
  if (!formattedDate.isValid)
    console.warn(`WARNING: Invalid date.`, node.frontmatter);
  return formattedDate;
}

function createSlug(node) {
  const maybeSlug = maybeFrontmatter(node, "slug");
  if (maybeSlug) return maybeSlug;

  const maybeTitle = maybeFrontmatter(node, "title");
  if (maybeTitle) return slugFromTitle(maybeTitle);

  const filePath = getFilePath(node);

  const maybePathSlug = maybeFilePathSlug(filePath);
  if (maybePathSlug) return maybePathSlug;

  const { dir, name } = filePath;
  if (dir === "") return `/${name}/`;
  return `/${dir}/`;
}

function createMarkdownNode(node, fieldCallback) {
  const slug = createSlug(node);
  const date = maybeDate(node);
  if (date) fieldCallback({ node, name: "date", value: date.toISOString() });
  fieldCallback({ node, name: "slug", value: slug });
}

module.exports = createMarkdownNode;
