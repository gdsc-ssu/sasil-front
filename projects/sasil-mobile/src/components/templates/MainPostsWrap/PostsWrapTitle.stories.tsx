import React from 'react';
import { storiesOf } from '@storybook/react-native';
import PostWrapTitle from './PostsWrapTitle';

storiesOf('PostWrapTitle', module)
  .add('HotRequest', () => <PostWrapTitle type="hotRequest" />)
  .add('PopularRequest', () => <PostWrapTitle type="popRequest" />)
  .add('PopularExperiment', () => <PostWrapTitle type="popExperiment" />);
