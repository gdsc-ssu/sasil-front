import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import SocialLoginBox from '.';

storiesOf('organisms/SocialLoginBox', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('Default', () => <SocialLoginBox />);
