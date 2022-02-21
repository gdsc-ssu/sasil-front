import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Test = () => {
  const [test, setTest] = useState('');

  return (
    <TouchableOpacity
      onPress={() => {
        setTest('qwer');
      }}
    >
      <Text>{test}</Text>
    </TouchableOpacity>
  );
};

export default Test;
