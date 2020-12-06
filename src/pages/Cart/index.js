import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useSelector, useDispatch } from "react-redux"
import Back from '../../assets/angle-arrow-down.svg'

import Game from '../../components/Game'

import gamesImages from '../../assets/images.js'

import styles from './styles'

const Cart = ({ navigation }) => {
  const store = useSelector(state => state.cartState)
  const [cart, setCart] = useState([])
  const [cartCost, setCartCost] = useState(0)
  const [transportCost, setTransportCost] = useState(0)

  useEffect(() => {
    setCart([])
    if (store.gamesCart.length) {
      let cost = 0
      for (let item of store.gamesCart) {
        cost += item.price
        setCart(prevArray => [...prevArray, item])
      }
      setCartCost(cost)
      setTransportCost(calculateTransportCost(cost, store.gamesCart.length))
    }
  }, [])

  const countItens = (length) => {
    if (length > 1) return `${length} Itens`
    else return `${length} Item`
  }

  const calculateTransportCost = (cartCost, itensCount) => {
    if (cartCost >= 250)
      return 0
    return itensCount * 10
  }

  const calculateTotal = (subtotal, transportCost) => {
    const total = subtotal+transportCost
    return total.toFixed(2)
  }
    

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}>
          <Back width={50} height={27} fill="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>CARRINHO</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
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
        <Text style={styles.text}>Subtotal ({countItens(store.gamesCart.length)}) : {`R$ ${cartCost.toFixed(2)}`}</Text>
        <Text style={styles.text}>Frete: {`R$ ${transportCost}`}</Text>
        <Text style={styles.text}>Total: {`R$ ${calculateTotal(cartCost, transportCost)}`}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


export default Cart;