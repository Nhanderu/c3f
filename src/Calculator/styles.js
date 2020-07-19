import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  calculator: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#ee6',
  },

  space: {
    flex: 1,
  },

  inputArea: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  dInput: {
    width: 120,
    padding: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

  calculate: {
    width: 120,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

  resultArea: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  result: {
    fontSize: 40,
    textAlign: 'center',
  },

  valuesArea: {
    flex: 4,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#222',
  },

  panelsMenu: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  panelButton: {
    height: 30,
    width: 50,
    backgroundColor: 'black',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  panelButtonActive: {
    height: 30,
    width: 50,
    backgroundColor: '#ee6',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  panelsArea: {
    flex: 9,
    alignSelf: 'stretch',
  },

  panel: {
    display: 'none',
  },

  panelActive: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  column: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 25,
  },
});
