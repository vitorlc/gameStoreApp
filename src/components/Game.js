import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, View } from 'react-native';

const Game = ({game, image}) => {
  const filterName = (name) => {
    if(name.length < 27)
      return name
    return `${name.substring(0,23)}...`
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={image}
        style={styles.gameImage}
      />
      <Text style={styles.gameText}>{filterName(game.name)}</Text>
      <View opacity={0.4}>
        <Text style={styles.gameText}>R$ {game.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameImage: {
    width: 175,
    height: 175
  },
  gameText: {
    fontSize: 16,
    color: '#fff'
  }
})


export default Game;