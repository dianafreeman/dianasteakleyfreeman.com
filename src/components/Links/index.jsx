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

const DESTINATIONS = [
  {
    name: "LinkedIn",
    description: "Connect with me on LinkedIn",
    href: "#",
    icon: AiFillLinkedin,
  },
  {
    name: "Github",
    description: "Browse my Github Repos",
    href: "#",
    icon: AiFillGithub,
  },
  {
    name: "Twitter",
    description: "Follow Me on Twitter",
    href: "#",
    icon: AiOutlineTwitter,
  },
  {
    name: "Email",
    description: "Shoot me an email!",
    href: "#",
    icon: AiFillMail,
  },
];
function Links() {
  // TODO: gatsby query goes here
  return (
    <SocialList>
      {DESTINATIONS.map((d) => (
        <OutboundLink href={d.href}>{d.icon()}</OutboundLink>
      ))}
    </SocialList>
  );
}

export default Links;
