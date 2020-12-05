import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useSelector, useDispatch } from "react-redux"
import Back from '../../assets/angle-arrow-down.svg'

import Game from '../../components/Game'

import gamesList from '../../db/products.json';
import gamesImages from '../../assets/images.js'

import styles from './styles'

const Cart = ({navigation}) => {
  const store = useSelector(state => state.cartState)
  const [cart, setCart] = useState([])
  const [cartCost, setCartCost] = useState(0)
  const [transportCost, setTransportCost] = useState(0)

  useEffect(() => {
    setCart([])
    if(store.gamesCart.length) {
      let cost = 0
      for(let item of store.gamesCart) {
        cost += item.price
        setCart(prevArray => [...prevArray, item])
      }
      setCartCost(cost)
      setTransportCost(calculateTransportCost(cost, store.gamesCart.length))
    }
  }, [])

  const calculateTransportCost = (cartCost, itensCount) => {
    if(cartCost >= 250)
      return 0
    return itensCount * 10
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}>
          <Back width={50} height={27} fill="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>CARRINHO</Text>
      </View>
      <ScrollView style={{flex: 1}}>
        {
          cart.map((game, index) => (
            <Game
              key={index}
              game={game}
              image={gamesImages[game.id].image}
            />
          ))
        }
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.text}>Valor Total: {`R$ ${cartCost}`}</Text>
        <Text style={styles.text}>Frete: {`R$ ${transportCost}`}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


export default Cart;