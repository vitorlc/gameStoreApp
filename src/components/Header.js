import React from 'react'
import {View, StyleSheet, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import Cart from '../assets/cart-icon.svg'

const Header = ({}) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
      <View style={styles.cart}>
        <TouchableOpacity style={{marginTop: 10}}>
          <Cart height={30}/>
          <Text style={styles.title}>Carrinho</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#343434',
    flexDirection: 'row',
    height: 64,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 12,
    marginLeft: 15,
    color: '#ffffff'
  },
  logo: {
    maxWidth: '50%',
    marginTop: 10
  },
  cart: {
    marginTop: 10,
    position: 'absolute',
    right: 0
  }
})

export default Header
