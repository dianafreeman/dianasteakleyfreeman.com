import React from 'react'
import GlobalStyle from '../styles/global'
import SEOHelmet from './SEOHelmet'
import 'typeface-cantata-one'
import 'typeface-open-sans'

const Layout = ({ title, children }) => (
  <>
    <SEOHelmet title={title} />
    <GlobalStyle />
    <main id="primary">{children}</main>
  </>
)

export default Layout
