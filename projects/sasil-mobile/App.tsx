import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { testFetch } from '@sasil/common';

export default function App() {
  const onPress = useCallback(async () => {
    const result = await testFetch(2);
    alert(result.data.email);
  }, [])
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}><Text>asdf</Text></TouchableOpacity>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
