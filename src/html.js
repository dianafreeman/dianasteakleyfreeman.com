/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  const { htmlAttributes,headComponents,
    bodyAttributes,
    preBodyComponents,
    body,
    postBodyComponents } = props
  return (
    <html lang="en" {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link
          href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&display=swap"
          rel="stylesheet"
        />

        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
