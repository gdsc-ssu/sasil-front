/* eslint-disable import/no-extraneous-dependencies */
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';

import styled from '@emotion/native';
import { withKnobs } from '@storybook/addon-knobs';
import { loadStories } from './storyLoader';

import './rn-addons';

const Decorator = styled.View({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
});

// enables knobs for all stories
addDecorator(withKnobs);

// 레이아웃 가운데 정렬
addDecorator((storyFn) => <Decorator>{storyFn()}</Decorator>);

// import stories
configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: require('@react-native-async-storage/async-storage').default,
});

export default StorybookUIRoot;
