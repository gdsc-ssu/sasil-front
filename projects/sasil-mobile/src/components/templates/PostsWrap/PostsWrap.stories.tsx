import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { expPosts, reqPosts } from '@/components/dummyData';
import PostsWrap from './PostsWrap';

storiesOf('PostsWrap', module)
  .add('ExperimentPostsWrap', () => (
    <PostsWrap posts={expPosts} type="experiment" />
  ))
  .add('RequestPostsWrap', () => <PostsWrap posts={reqPosts} type="request" />);
