import { StyleSheet } from 'react-native'

import { colors } from './resources'

export default StyleSheet.create({
  header: {
    backgroundColor: colors.yellow,
    borderBottomWidth: 0,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    shadowOffset: {
      height: 0
    }
  },
  infoButton: {
    marginRight: 10,
    color: colors.black,
    fontSize: 16
  }
})
