import React, { useState } from 'react';
import styled from 'styled-components';
import useTheme from '@hooks/useTheme';
import { a, useSpring } from '@react-spring/web';
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

const ExternalLink = styled(a.a)`
  font-size: ${(props) => props.theme.font.size.responsive.md};
  &:active,
  &:focus {
    color: ${(props) =>
      props.theme.palette
        .primaryLight}; // accessibility fallback fallback for accessibility
  }
`;

const AnimatedLink = (props) => {
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
      style={{ color }}
    />
  );
};

function SocialLinks() {
  return (
    <SocialList>
      <li>
        <AnimatedLink href="https://www.linkedin.com/in/dianasteakleyfreeman/">
          <AiFillLinkedin />
        </AnimatedLink>
      </li>
      <li>
        <AnimatedLink href="https://github.com/dianafreeman">
          <AiFillGithub />
        </AnimatedLink>
      </li>
      <li>
        <AnimatedLink href="https://twitter.com/dianasfreeman">
          <AiOutlineTwitter />
        </AnimatedLink>
      </li>
      <li>
        <AnimatedLink href="mailto:diana@dianasteakelyfreeman.com">
          <AiFillMail />
        </AnimatedLink>
      </li>
    </SocialList>
  );
}

export default SocialLinks;
