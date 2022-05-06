/* eslint-disable global-require */
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { testFetch } from '@sasil/common';
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

const COLOR = '#fff';

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     backgroundColor: COLOR,
//     flex: 1,
//     justifyContent: 'center',
//   },
// });

const App = () => {
  const onPress = useCallback(async () => {
    const result = await testFetch(2);
    Alert.alert(result.data.email);
  }, []);

  const [loaded] = useFonts({
    bold: require('./assets/fonts/Pretendard-Bold.otf'),
    regular: require('./assets/fonts/Pretendard-Regular.otf'),
    semiBold: require('./assets/fonts/Pretendard-SemiBold.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <RootNavigator />
    // <View style={styles.container}>
    //   <TouchableOpacity onPress={onPress}>
    //     <Text>asdf</Text>
    //   </TouchableOpacity>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
};

export default STORYBOOK_ENABLED ? StorybookUIRoot : App;
