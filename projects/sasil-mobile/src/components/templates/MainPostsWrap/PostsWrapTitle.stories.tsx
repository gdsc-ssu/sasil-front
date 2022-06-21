import React from 'react';
import { storiesOf } from '@storybook/react-native';
import PostsWrapTitle from './PostsWrapTitle';

storiesOf('PostsWrapTitle', module)
  .add('HotRequest', () => <PostsWrapTitle type="hotRequest" />)
  .add('PopularRequest', () => <PostsWrapTitle type="popRequest" />)
  .add('PopularExperiment', () => <PostsWrapTitle type="popExperiment" />);
