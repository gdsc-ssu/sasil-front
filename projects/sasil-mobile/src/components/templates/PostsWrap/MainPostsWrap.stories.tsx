import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { expPosts, reqPosts } from '@/components/dummyData';
import MainPostsWrap from '.';

storiesOf('MainPostsWrap', module)
  .add('HotRequest', () => <MainPostsWrap posts={reqPosts} type="hotRequest" />)
  .add('PopularRequest', () => (
    <MainPostsWrap posts={reqPosts} type="popRequest" />
  ))
  .add('PopularExperiment', () => (
    <MainPostsWrap posts={expPosts} type="popExperiment" />
  ));
