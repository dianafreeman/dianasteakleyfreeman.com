/* eslint-disable no-return-assign */
import React, { Component, createRef } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GlobalStyle from '../styles/global'
import { colors } from '../../tailwind'
import Navbar from '../components/Navbar'
import { config, schemaOrgWebPage, breadcrumb } from '../../config/website'
import 'typeface-cantata-one'
import 'typeface-open-sans'

const PrimaryView = styled.main`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : colors['grey-dark'])} !important;
  position: ${props => (props.parallax === true ? 'absolute' : 'relative')};
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`
class Layout extends Component {

  render() {
    const { thisPageTitle, children, backgroundColor, contentDescription } = this.props
    const title = thisPageTitle || config.siteTitle
    return (
      <>
        <Helmet>
          <title>{title}</title>
          <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <meta name="diana-m-steakley-freeman" content="Diana M. Steakley-Freeman" />
          <link rel="shortcut icon" href="favicon.ico" />
          <meta name="msapplication-TileColor" content={backgroundColor} />
          <meta name="msapplication-config" content="browserconfig.xml" />
          <meta name="description" content={contentDescription || config.description} />
          <meta name="image" content={config.image} />
          <meta property="og:locale" content={config.ogLanguage} />
          <meta property="og:site_name" content={config.ogSiteName} />
          <meta property="og:title" content={title} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={contentDescription || config.description} />
          <meta property="og:image" content={config.image} />
          <meta property="og:image:alt" content={contentDescription || config.description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={contentDescription || config.description} />
          <meta name="twitter:image" content={config.image} />
          <meta name="twitter:image:alt" content={contentDescription || config.description} />
          <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>
          <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
        </Helmet>
        <GlobalStyle backgroundColor={backgroundColor} />
          <Navbar parallax={this.parallax} backgroundColor={backgroundColor} />
        <PrimaryView id="primary" backgroundColor={backgroundColor}>
          {children}
        </PrimaryView>

      </>
    )
  }
}
export default Layout

Layout.propTypes = {
  // thisPageTitle: PropTypes.string.isRequired,
  // parallax: PropTypes.func.isRequired,
  // children: PropTypes.arrayOf(PropTypes.node).isRequired,
}
