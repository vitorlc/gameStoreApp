import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Header from '../../components/Header'
import styles from './styles';

const Home = () => {
  return (
    <>
      <StatusBar barStyle="light-content"/>
      <Header></Header>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </>
  );
}

export default Home;