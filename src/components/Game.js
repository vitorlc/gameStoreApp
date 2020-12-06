import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, View } from 'react-native';

const Game = ({ game, image, click, onCart = false, removeItem }) => {
  const filterName = (name) => {
    if (name.length < 27)
      return name
    return `${name.substring(0, 23)}...`
  }

  return (
    <View style={styles.container}>
      {onCart ?
        <>
          <TouchableOpacity style={styles.removeButton} onPress={removeItem}>
            <Text style={{ ...styles.gameText, fontWeight: 'bold', fontSize: 20 }}>X</Text>
          </TouchableOpacity>
          <Text style={styles.countItem}>{game.count}x</Text>
        </>
        : null
      }
      <TouchableOpacity style={{
        alignItems: 'center',
        justifyContent: 'center'
      }} onPress={click}>
        <Image
          source={image}
          style={styles.gameImage}
        />

        <Text style={styles.gameText}>{filterName(game.name)}</Text>
        <View opacity={0.4}>
          <Text style={styles.gameText}>R$ {game.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
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
  },
  removeButton: {
    position: 'absolute',
    right: 0,
    marginRight: 20,
    top: 5
  },
  countItem: {
    fontSize: 16,
    color: '#fff',
    position: 'absolute',
    left: 0,
    marginLeft: 20,
    top: 5
  }
})


export default Game;