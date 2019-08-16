import React from 'react'
import GlobalStyle from '../styles/global'
import SEOHelmet from './SEOHelmet'
import 'typeface-cantata-one'
import 'typeface-open-sans'

const Layout = title => (
  <>
    <SEOHelmet title={title} />
    <GlobalStyle />
    <main style={{ display: 'block' }}>{children}</main>
    <Navbar />
  </>
)

export default Layout
