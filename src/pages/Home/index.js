import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import { useSelector, useDispatch } from "react-redux"

import CategoryFilters from '../../components/CategoryFilters';
import Filters from '../../components/Filters'
import Header from '../../components/Header'
import Game from '../../components/Game'
import styles from './styles';
import { addItemCart } from "../../actions"

import gamesList from '../../db/products.json';
import gamesImages from '../../assets/images.js'

const Home = ({navigation}) => {
  const store = useSelector(state => state.cartState)
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header navigation={navigation} cartCount={store.gamesCart.length}/>
      <ScrollView >
        <CategoryFilters />
        <Filters/>
        <View style={styles.list}>
          {gamesList.map(game => ( 
            <Game
              key={game.id}
              game={game}
              image={gamesImages[game.id].image}
              click={()=> dispatch(addItemCart(game))}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;