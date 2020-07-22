import { StyleSheet } from 'react-native'

import colors from '../colors'

export default StyleSheet.create({
  row: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  label: {
    fontSize: 20,
    color: colors.white
  },

  bigInput: {
    width: 100,
    padding: 0,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white,
    fontSize: 20,
    textAlign: 'center'
  },

  smallInput: {
    width: 50,
    padding: 0,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white,
    fontSize: 20,
    textAlign: 'center'
  }
})
