import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      
      <Text>Home</Text>
    </View>
  );
}

export default Home;