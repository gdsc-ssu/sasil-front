/* eslint-disable global-require */
import { useFonts } from 'expo-font';
import RootNavigator from '@/routes/RootNavigator';
import StorybookUIRoot from './storybook';

const { connectToDevTools } = require('react-devtools-core');

if (__DEV__) {
  connectToDevTools({
    host: 'localhost',
    port: 8097,
  });
}

const STORYBOOK_ENABLED = false;

const App = () => {
  const [loaded] = useFonts({
    bold: require('./assets/fonts/Pretendard-Bold.otf'),
    regular: require('./assets/fonts/Pretendard-Regular.otf'),
    semiBold: require('./assets/fonts/Pretendard-SemiBold.otf'),
  });

  if (!loaded) {
    return null;
  }

  return <RootNavigator />;
};

export default STORYBOOK_ENABLED ? StorybookUIRoot : App;
