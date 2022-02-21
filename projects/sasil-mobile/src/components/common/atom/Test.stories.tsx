import { storiesOf } from '@storybook/react-native';
import { View, StyleSheet } from 'react-native';
import Test from '@/components/common/atom/Test';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

storiesOf('components/common/atom', module)
  .addDecorator((getStory) => (
    <View style={styles.container}>{getStory()}</View>
  ))
  .add('Test', () => <Test />);
