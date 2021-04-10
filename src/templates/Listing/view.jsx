import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PostListing from '../../components/PostListing';
import SEO from '../../components/Layout/SEO';

// eslint-disable-next-line import/no-unresolved
import config from '@config/siteConfig';

const Paging = ({ context }) => {
  const { currentPageNum, pageCount } = context;
  const prevPage = currentPageNum - 1 === 1 ? '/' : `/${currentPageNum - 1}/`;
  const nextPage = `/${currentPageNum + 1}/`;
  const isFirstPage = currentPageNum === 1;
  const isLastPage = currentPageNum === pageCount;

  return (
    <div className="paging-container">
      {!isFirstPage && <Link to={prevPage}>Previous</Link>}
      {/* eslint-disable react/jsx-props-no-spreading */}
      {[...Array(pageCount)].map((_val, index) => {
        /* eslint-enable react/jsx-props-no-spreading */
        const pageNum = index + 1;
        return (
          <Link
            key={`listing-page-${pageNum}`}
            to={pageNum === 1 ? '/' : `/${pageNum}/`}
          >
            {pageNum}
          </Link>
        );
      })}
      {!isLastPage && <Link to={nextPage}>Next</Link>}
    </div>
  );
};

export default function ListingView({ pageContext, postEdges, ...rest }) {
  const helmetProps = {
    title: config.siteTitle,
  };
  return (
    <>
      <Helmet {...helmetProps} />
      <SEO />
      <PostListing postEdges={postEdges} />
      <Paging context={pageContext} />
    </>
  );
}
