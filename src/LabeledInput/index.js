import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  label: {
    fontSize: 20,
    color: 'white',
  },

  bigInput: {
    width: 100,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

  smallInput: {
    width: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

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
