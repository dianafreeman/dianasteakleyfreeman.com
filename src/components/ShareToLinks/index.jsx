import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share';
import urljoin from 'url-join';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/styles';
import config from '@config/siteConfig';

// .social-links > div {
//   margin: 5px 15px;
//   cursor: pointer;
// }

const ShareCount = styled(Box)({
  width: 100,
  height: 100,
  background: 'red',
});

function ShareToLinks({ postNode, postPath, mobile }) {
  const post = postNode.frontmatter;
  const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
  const iconSize = mobile ? 36 : 48;

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-evenly" alignContent="center">
      <Typography variant="subtitle1"> Share on:</Typography>
      <RedditShareButton url={url} title={post.title}>
        <RedditIcon round size={iconSize} />
      </RedditShareButton>
      <TwitterShareButton url={url} title={post.title}>
        <TwitterIcon round size={iconSize} />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={postNode.excerpt}>
        <FacebookIcon round size={iconSize} />
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={post.title} description={postNode.excerpt}>
        <LinkedinIcon round size={iconSize} />
      </LinkedinShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon round size={iconSize} />
      </TelegramShareButton>
    </Box>
  );
}

export default ShareToLinks;
