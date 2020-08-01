import { StyleSheet } from 'react-native'

import { colors } from '../../resources'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  calculator: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.yellow
  },

  inputArea: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  dInput: {
    width: 120,
    padding: 0,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white,
    fontSize: 20,
    textAlign: 'center'
  },

  calculate: {
    width: 120,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white,
    fontSize: 20,
    textAlign: 'center'
  },

  resultArea: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  result: {
    fontSize: 40,
    textAlign: 'center'
  },

  valuesArea: {
    flex: 6,
    backgroundColor: colors.lightBlack
  },

  paginationDot: {
    backgroundColor: colors.black
  },

  activePaginationDot: {
    backgroundColor: colors.yellow
  },

  panel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  column: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 25
  },

  space: {
    flex: 1
  },

  errorInput: {
    borderColor: colors.red,
    elevation: 10,
    shadowColor: colors.red,
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    shadowOffset: {
      width: 0,
      height: 5
    }
  }
})
