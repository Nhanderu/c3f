import React from 'react'
import { View, Text, TextInput } from 'react-native'

import styles from './styles'

export default ({ children, style, small, defaultValue, onChangeText }) => {
  const textStyle = [small ? styles.smallInput : styles.bigInput, style]
  const textDefaultValue = defaultValue ? defaultValue.toString() : ''
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{children}</Text>
      <TextInput
        style={textStyle}
        defaultValue={textDefaultValue}
        onChangeText={onChangeText}
        keyboardType='number-pad'
        maxLength={2}
      />
    </View>
  )
}
