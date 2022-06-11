import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const YAML_DELIMITER = "---";

export async function get({ params }) {
  const filePath = path.resolve(".", `content/${params.category}/${params.slug}.md`);
  const file = await fs.readFileSync(filePath);
  const fileContent = Buffer.from(file).toString();

  const body = fileContent.split(YAML_DELIMITER).reduce((acc, markdown) => {
    try {
      const obj = yaml.load(markdown);
      return { ...acc, frontmatter: { ...acc.frontmatter, ...obj } };
    } catch (err) {
      console.log("Not Valid YAML");
      return { ...acc, markdown };
    }
  }, {});

  if (file) {
    return {
      body
    };
  }
  return {
    status: 404
  };
}
