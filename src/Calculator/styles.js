import { StyleSheet } from 'react-native'

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
    backgroundColor: '#ee6'
  },

  space: {
    flex: 1
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
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 20,
    textAlign: 'center'
  },

  calculate: {
    width: 120,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
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
    flex: 4,
    backgroundColor: '#222'
  },

  paginationDot: {
    backgroundColor: 'black'
  },

  activePaginationDot: {
    backgroundColor: '#ee6'
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

  errorInput: {
    borderColor: 'red',
    elevation: 10,
    shadowColor: 'red',
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    shadowOffset: {
      width: 0,
      height: 5
    }
  }
})
