import moment from "moment";
import config from "@config/site";

const getPublicationDate = (postNode) => {
  if (!postNode?.frontmatter?.date) return null;
  return moment(postNode.frontmatter.date, config.dateFromFormat).toDate();
};

export default getPublicationDate;
