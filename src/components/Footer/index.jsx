import React from 'react';
import { Link } from 'gatsby';

function Footer({ config }) {
  const url = config.siteRss;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <div>
      <div className="notice-container">
        <h4>{copyright}</h4>
        <Link to={url}>
          <button type="button">Subscribe</button>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
