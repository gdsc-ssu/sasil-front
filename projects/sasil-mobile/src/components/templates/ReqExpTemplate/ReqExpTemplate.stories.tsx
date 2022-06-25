import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { categories, reqPosts, expPosts } from '@/components/dummyData';
import ReqExpTemplate from './ReqExpTemplate';

storiesOf('ReqExpTemplate', module)
  .add('ExpTemplate', () => (
    <ReqExpTemplate
      type="experiment"
      sortType="popular"
      categories={categories}
      posts={expPosts}
    />
  ))
  .add('ReqTemplate', () => (
    <ReqExpTemplate
      type="request"
      sortType="recent"
      categories={categories}
      posts={reqPosts}
    />
  ));
