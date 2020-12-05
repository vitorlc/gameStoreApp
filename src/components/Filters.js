import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TouchableHighlight } from 'react-native';
import FilterButton from '../assets/filter-results-button.svg'

import ModalFilter from './ModalFilter'

const Filters = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [order, setOrder] = useState({name: 'Popularidade'})

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Ordem  •  {`${order.name}`}</Text>
      <TouchableOpacity style={styles.filter} onPress={() => setModalVisible(!modalVisible)}>
        <FilterButton width={40} height={25} fill="#fff" />
      </TouchableOpacity>
      <ModalFilter style={styles.modal} 
        modalVisible={modalVisible} 
        hideModal={() => setModalVisible(!modalVisible)} 
        setOrderFunction={setOrder}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 3
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  filter: {
    position: 'absolute',
    right: 0
  }
})

export default Filters;