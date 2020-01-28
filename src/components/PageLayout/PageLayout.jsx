/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { animated, useSpring } from 'react-spring';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import { data, schemaOrgWebPage, breadcrumb } from '../../config/web/data';
import theme from '../../config/theme';
import NavPanel from '../NavPanel';
import NavToggler from '../NavToggler';

const PrimaryView = animated(styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.color.black};
  color: ${props => props.theme.color.white};
  padding: 2em;
  display: block;
  position: relative;
  z-index: 0;
`);


const ViewAnimator = ({ navIsOpen, children }) => {
  const { x, rks } = useSpring({
    x: navIsOpen ? 25 : 0 ,
    rks: navIsOpen ? [45, 10 , 1.1] : [0, 0, 1],
  });
  return (
    <animated.div style={{ transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
      <animated.div
        style={{
          transform: rks.interpolate((r,k,s) => `rotateY(-${r}deg) skew(0, -${k}deg) scale3d(${s}, 1, 1)`),
          transformOrigin: '0 -1em'
        }}
      >
        {children}
      </animated.div>
    </animated.div>
  );
};

const PageLayout = props => {
  const { pageTitle, children, backgroundColor = 'red', contentDescription } = props;
  const title = pageTitle || config.siteTitle;
  const [navOpen, set] = useState(false);
  return (
    <ThemeProvider theme={theme}>
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
      <GlobalStyle theme={theme} />
      <NavToggler onClick={() => set(!navOpen)} isOpen={navOpen} />
      <NavPanel isOpen={navOpen}/>
      <ViewAnimator navIsOpen={navOpen}>
        <PrimaryView id="primary" theme={theme}>
          {children}
        </PrimaryView>
      </ViewAnimator>
    </ThemeProvider>
  );
};
export default PageLayout;

PageLayout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
  theme: PropTypes.object.isRequired,
};
