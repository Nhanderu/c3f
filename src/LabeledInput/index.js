import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';

export default ({children, small, defaultValue, onChangeText}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{children}</Text>
      <TextInput
        style={small ? styles.smallInput : styles.bigInput}
        defaultValue={defaultValue ? defaultValue.toString() : ''}
        onChangeText={onChangeText}
        keyboardType="number-pad"
        maxLength={2}
      />
    </View>
  );
};
