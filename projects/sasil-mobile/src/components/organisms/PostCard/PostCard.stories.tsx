import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { expPosts, reqPosts } from '@/components/dummyData';
import PostCard from '.';

storiesOf('PostCard', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('Request Post', () => (
    <PostCard
      type="request"
      title={reqPosts[0].title}
      likeCount={reqPosts[0].likeCount}
      thumbnail={reqPosts[0].thumbnail}
    />
  ))
  .add('Experiment Post', () => (
    <PostCard
      type="experiment"
      title={expPosts[0].title}
      likeCount={expPosts[0].likeCount}
      writerObj={expPosts[0].user}
      thumbnail={expPosts[0].thumbnail}
    />
  ));
