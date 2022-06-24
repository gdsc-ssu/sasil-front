import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CategoryBox from '.';

storiesOf('CategoryBox', module)
  .add('Default', () => <CategoryBox name="카테고리길어지면어쩌지" />)
  .add('WithBackground', () => <CategoryBox name="Test" isWithBackground />);
