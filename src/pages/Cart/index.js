import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Back from '../../assets/angle-arrow-down.svg'

import Game from '../../components/Game'

import gamesList from '../../db/products.json';
import gamesImages from '../../assets/images.js'

import styles from './styles'

const Cart = ({navigation}) => {
  const [cart, setcart] = useState([])

  useEffect(() => {
    setcart([])
    setcart(prevArray => [...prevArray, gamesList[0]])
    setcart(prevArray => [...prevArray, gamesList[1]])
    setcart(prevArray => [...prevArray, gamesList[2]])
  }, [])

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
          cart.map(game => (
            <Game
              key={game.id}
              game={game}
              image={gamesImages[game.id].image}
            />
          ))
        }
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.text}>Valor Total: {`R$ 100`}</Text>
        <Text style={styles.text}>Frete: {`R$ 100`}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


export default Cart;