import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    right: 0,
    position: 'absolute'
  },
  header: {
    margin: 10,
    color: '#fff',
    flexDirection: 'row'
  },
  footer: {
    padding: 10,
    borderTopColor: '#d8d8d8',
    borderTopWidth: 2,
    margin: 20,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  button: {
    marginTop: 10,
    backgroundColor: '#d12d36',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    width: 200,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff'
  }
})