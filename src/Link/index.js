import React from 'react'
import { Text, Linking } from 'react-native'

export default ({ children, style, href }) => {
  const onPress = () => Linking.openURL(href)
  return (
    <Text style={style} accessibilityRole='link' onPress={onPress}>
      {children}
    </Text>
  )
}
