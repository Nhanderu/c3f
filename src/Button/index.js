import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default ({ children, style, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={style} accessibilityRole='button'>{children}</Text>
      </TouchableOpacity>
    </View>
  )
}
