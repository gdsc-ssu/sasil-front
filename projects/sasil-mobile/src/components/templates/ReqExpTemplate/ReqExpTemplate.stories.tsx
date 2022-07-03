import React from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { categories } from '@/components/dummyData';
import ReqExpTemplate from './ReqExpTemplate';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  mock: {
    flex: 1,
  },
});

storiesOf('ReqExpTemplate', module)
  .add('ExpTemplate', () => (
    <View style={styles.container}>
      <ReqExpTemplate
        type="experiment"
        sortType="popular"
        categories={categories}
      >
        <View style={styles.mock} />
      </ReqExpTemplate>
    </View>
  ))
  .add('ReqTemplate', () => (
    <View style={styles.container}>
      <ReqExpTemplate type="request" sortType="recent" categories={categories}>
        <View style={styles.mock} />
      </ReqExpTemplate>
    </View>
  ));
