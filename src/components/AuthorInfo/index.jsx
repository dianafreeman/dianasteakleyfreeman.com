import React from 'react';
import { Follow as FollowOnTwitter } from 'react-twitter-widgets';
import { Typography } from '@material-ui/core';

function AuthorInfo({ config, expanded }) {
  const { userTwitter, username } = config;

  return (
    <>
      <Typography>{username}</Typography>
      <FollowOnTwitter username={userTwitter} options={{ count: expanded ? true : 'none' }} />
    </>
  );
}

export default AuthorInfo;
