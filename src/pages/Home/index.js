import React from 'react';
import { View, StatusBar } from 'react-native';
import Filters from '../../components/CategoryFilters';
import Header from '../../components/Header'
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Header></Header>
      <Filters></Filters>
    </View>
  );
}

export default Home;