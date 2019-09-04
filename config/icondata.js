/* eslint-disable react/display-name */
import React from 'react'
import tinycolor from 'tinycolor2'
import { FaGrunt, FaAdobe, FaAccessibleIcon, FaTwitter, FaMediumM, FaGithubAlt, FaSass, FaJs } from 'react-icons/fa'
import { colors } from '../tailwind'

const getTextColor = color => (tinycolor(color).isLight() ? 'black' : 'white')
const defaultIconProps = { size: '35px' }
const iconData = [
  {
    label: 'Accessibility Controls',
    slug: 'accessibility',
    color: colors['blue-dark'],
    icon: (() => <FaAccessibleIcon {...defaultIconProps} />)(),
    textColor: (() => getTextColor(colors['blue-dark']))(),
    link: null,
  },
  {
    label: 'Adobe Creative Suite',
    slug: 'adobe-creative-suite',
    color: colors.brands['adobe-creative-suite'],
    icon: (() => <FaAdobe {...defaultIconProps} />)(),
    textColor: (() => getTextColor(colors.brands['adobe-creative-suite']))(),
    link: 'https://www.adobe.com/creativecloud/catalog/desktop.html',
  },
  {
    label: 'Grunt',
    slug: 'grunt',
    color: colors.brands.grunt,
    icon: (() => <FaGrunt {...defaultIconProps} />)(),
    textColor: (() => getTextColor(colors.brands.grunt))(),
    link: 'https://gruntjs.com/',
  },
  {
    label: 'Twitter',
    slug: 'twitter',
    color: colors.brands.twitter,
    icon: (() => <FaTwitter {...defaultIconProps} />)(),
    textColor: (() => getTextColor(colors.brands.twitter))(),
    link: 'https://twitter.com/dianasfreeman/',
  },
  {
    label: 'Medium',
    slug: 'twitter',
    color: colors.brands.medium,
    icon: (() => <FaMediumM {...defaultIconProps} />)(),
    textColor: (() => getTextColor(colors.brands.medium))(),
    link: 'https://medium.com/dianasfreeman/',
  },
  {
    label: 'GitHub',
    slug: 'github',
    color: colors.brands.github,
    icon: (() => <FaGithubAlt {...defaultIconProps} />)(),
    textColor: (() => getTextColor(colors.brands.github))(),
    link: 'https://github.com/dianafreeman/',
  },
  {
    label: 'SASS',
    slug: 'sass',
    color: colors.brands.sass,
    icon: (() => <FaSass {...defaultIconProps} />)(),
    textColor: (() => getTextColor(colors.brands))(),
    link: 'https://sass-lang.com/',
  },
  {
    label: 'JavaScript',
    slug: 'javascript',
    color: colors.brands.javascript,
    icon: (() => <FaJs {...defaultIconProps} />)(),
    textColor: (() => getTextColor(colors.brands))(),
    link: 'https://sass-lang.com/',
  },
]

export default iconData

