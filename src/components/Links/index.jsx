import React from "react";
import styled from "styled-components";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMail,
} from "react-icons/ai";

const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  width: inherit;
  justify-content: center;
  list-style: none;
  align-content: baseline;
  padding: unset;
  margin: auto unset;
`;

function SocialLinks() {
  // TODO: gatsby query goes here
  return (
    <SocialList>
      <li>
        <OutboundLink href="https://www.linkedin.com/in/dianasteakleyfreeman/">
          <AiFillLinkedin />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink href="https://github.com/dianafreeman">
          <AiFillGithub />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink href="https://twitter.com/dianasfreeman">
          <AiOutlineTwitter />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink href="mailto:diana@dianasteakelyfreeman.com">
          <AiFillMail />
        </OutboundLink>
      </li>
    </SocialList>
  );
}

export default SocialLinks;
