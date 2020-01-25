/* eslint-disable react/display-name */
import React from 'react';
import tinycolor from 'tinycolor2';
import {
  FaGrunt,
  FaAdobe,
  FaAccessibleIcon,
  FaTwitter,
  FaMediumM,
  FaGithubAlt,
  FaSass,
  FaJs,
} from 'react-icons/fa';
import { theme } from '../theme

const getTextColor = color => (tinycolor(color).isLight() ? 'black' : 'white');
const defaultIconProps = { size: '35px' };
const iconData = [
  {
    label: 'Accessibility Controls',
    slug: 'accessibility',
    color: theme.colors['blue-dark'],
    icon: (() => <FaAccessibleIcon {...defaultIconProps} />)(),
    textColor: (() => getTextColor(theme.colors['blue-dark']))(),
    link: null,
  },
  {
    label: 'Adobe Creative Suite',
    slug: 'adobe-creative-suite',
    color: theme.colors.brands['adobe-creative-suite'],
    icon: (() => <FaAdobe {...defaultIconProps} />)(),
    textColor: (() => getTextColor(theme.colors.brands['adobe-creative-suite']))(),
    link: 'https://www.adobe.com/creativecloud/catalog/desktop.html',
  },
  {
    label: 'Grunt',
    slug: 'grunt',
    color: theme.colors.brands.grunt,
    icon: (() => <FaGrunt {...defaultIconProps} />)(),
    textColor: (() => getTextColor(theme.colors.brands.grunt))(),
    link: 'https://gruntjs.com/',
  },
  {
    label: 'Twitter',
    slug: 'twitter',
    color: theme.colors.brands.twitter,
    icon: (() => <FaTwitter {...defaultIconProps} />)(),
    textColor: (() => getTextColor(theme.colors.brands.twitter))(),
    link: 'https://twitter.com/dianasfreeman/',
  },
  {
    label: 'Medium',
    slug: 'twitter',
    color: theme.colors.brands.medium,
    icon: (() => <FaMediumM {...defaultIconProps} />)(),
    textColor: (() => getTextColor(theme.colors.brands.medium))(),
    link: 'https://medium.com/dianasfreeman/',
  },
  {
    label: 'GitHub',
    slug: 'github',
    color: theme.colors.brands.github,
    icon: (() => <FaGithubAlt {...defaultIconProps} />)(),
    textColor: (() => getTextColor(theme.colors.brands.github))(),
    link: 'https://github.com/dianafreeman/',
  },
  {
    label: 'SASS',
    slug: 'sass',
    color: theme.colors.brands.sass,
    icon: (() => <FaSass {...defaultIconProps} />)(),
    textColor: (() => getTextColor(theme.colors.brands))(),
    link: 'https://sass-lang.com/',
  },
  {
    label: 'JavaScript',
    slug: 'javascript',
    color: theme.colors.brands.javascript,
    icon: (() => <FaJs {...defaultIconProps} />)(),
    textColor: (() => getTextColor(theme.colors.brands))(),
    link: 'https://sass-lang.com/',
  },
];

export default iconData;
