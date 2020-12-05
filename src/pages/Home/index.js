import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';

import Filters from '../../components/CategoryFilters';
import Header from '../../components/Header'
import Game from '../../components/Game'
import styles from './styles';

import gamesList from '../../db/products.json';
import gamesImages from '../../assets/images.js'

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />
      <ScrollView >
        <Filters />
        <View style={styles.list}>
          {gamesList.map(game => ( 
            <Game
              key={game.id}
              game={game}
              image={gamesImages[game.id].image}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;