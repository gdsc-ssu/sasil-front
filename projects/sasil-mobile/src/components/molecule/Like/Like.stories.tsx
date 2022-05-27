import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { COLORS } from '@sasil/common';
import Like from '.';

storiesOf('Like', module)
  .add('Default', () => <Like likeCount={10} color={COLORS.primary.normal} />)
  .add('Black', () => <Like likeCount={100} color={COLORS.grayscale.black} />);
