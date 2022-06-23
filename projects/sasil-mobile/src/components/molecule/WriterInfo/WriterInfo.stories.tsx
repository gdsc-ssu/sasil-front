import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import { users } from '@/components/dummyData';
import WriterInfo from './WriterInfo';

storiesOf('WriterInfo', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('with Profile Image', () => (
    <WriterInfo
      writerObj={users[0]}
      textColor={COLORS.grayscale.gray7}
      textStyleName={TEXT_STYLE_NAME.body3}
      profileSize={14}
    />
  ))
  .add('without Profile Image', () => (
    <WriterInfo
      writerObj={users[1]}
      textColor={COLORS.grayscale.gray7}
      textStyleName={TEXT_STYLE_NAME.body3}
      profileSize={14}
    />
  ));
