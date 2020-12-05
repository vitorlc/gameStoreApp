import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';

const CategoryList =  [
  {
    name: 'Todos'
  },
  {
    name: 'Aventura'
  },
  {
    name: 'Ação'
  },
  {
    name: 'Estratégia'
  },
  {
    name: 'RPG'
  },
  {
    name: 'Esporte'
  },
  {
    name: 'Corrida'
  },
  {
    name: 'Simulação'
  }
]


const Filters = () => {
  return (
    <ScrollView style={styles.line} horizontal={true} >
      {
        CategoryList.map((e, index) => (
          <TouchableOpacity style={styles.category} key={index}>
            <Text style={styles.text}>{e.name}</Text>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  );
}

export default Filters;


const styles = StyleSheet.create({
  line: {
    flex: 1,
    flexDirection: "row",
  },
  category: {
    alignItems: "center",
    margin: 10
  },
  text: {
    color: '#fff',
    fontWeight: 'bold'
  }
})