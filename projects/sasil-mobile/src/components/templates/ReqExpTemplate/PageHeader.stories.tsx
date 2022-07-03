import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { categories } from '@/components/dummyData';
import PageHeader from './PageHeader';

storiesOf('ReqExpPageHeader', module)
  .add('ExperimentWithPopular', () => (
    <PageHeader type="experiment" sortType="popular" categories={categories} />
  ))
  .add('ExperimentWithRecent', () => (
    <PageHeader type="request" sortType="recent" categories={categories} />
  ));
