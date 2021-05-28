import React, { useState } from 'react';
import styled, { useTheme as useStyledTheme } from 'styled-components';
import { a, useSpring } from '@react-spring/web';
import { OutboundLink as GtagOutboundLink } from 'gatsby-plugin-google-gtag';

import useTheme from '@project/hooks/useTheme';

import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMail,
} from 'react-icons/ai';

const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  width: inherit;
  justify-content: space-between;
  list-style: none;
  align-content: baseline;
  padding: unset;
  margin: auto unset;
`;

const ExternalLink = styled(a(GtagOutboundLink))`
  &:active,
  &:focus {
    color: ${({ theme }) =>
      theme.palette
        .primaryLight}; // accessibility fallback fallback for accessibility
  }
`;

export const OutboundLink = ({ style, ...props }) => {
  const [isHovered, set] = useState(false);
  const { springConfig: config, palette } = useTheme();
  const [{ color }] = useSpring(
    {
      color: isHovered ? palette.primaryLight : palette.secondaryLight,
      config,
    },
    [isHovered],
  );

  const toggle = () => set((bool) => !bool);

  return (
    <ExternalLink
      onMouseEnter={() => toggle()}
      onMouseLeave={() => toggle()}
      {...props}
      style={{ color, ...style }}
    />
  );
};

function SocialLinks() {
  const theme = useStyledTheme();
  return (
    <SocialList>
      <li>
        <OutboundLink
          style={{ fontSize: theme.font.size.responsive.md }}
          href="https://www.linkedin.com/in/dianasteakleyfreeman/"
        >
          <AiFillLinkedin />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink
          style={{ fontSize: theme.font.size.responsive.md }}
          href="https://github.com/dianafreeman"
        >
          <AiFillGithub />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink
          style={{ fontSize: theme.font.size.responsive.md }}
          href="https://twitter.com/dianasfreeman"
        >
          <AiOutlineTwitter />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink
          style={{ fontSize: theme.font.size.responsive.md }}
          href="mailto:diana@dianasteakelyfreeman.com"
        >
          <AiFillMail />
        </OutboundLink>
      </li>
    </SocialList>
  );
}

export default SocialLinks;
