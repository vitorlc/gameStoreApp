import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TouchableHighlight } from 'react-native';


const ModalFilter = ({ modalVisible, hideModal, setOrderFunction }) => {
  const orderList = [{
    name: 'Preço',
    key: 'price'
  }, {
    name: 'Popularidade',
    key: 'score'
  }, {
    name: 'Alfabética',
    key: 'name'
  }]

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <View style={styles.wrapper}>
        <View style={styles.modalView}>
          {
            orderList.map((e, index) => (
              <View style={styles.orderBox} key={index}>
                <TouchableOpacity
                  style={styles.orderItem}
                  onPress={() => {
                    setOrderFunction(e)
                    hideModal();
                  }}
                >
                  <Text style={styles.text}>{e.name}</Text>
                </TouchableOpacity>
              </View>
            ))
          }
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.setButton}
              onPress={() => {
                hideModal();
              }}
            >
              <Text style={styles.text}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    flexDirection: 'row',
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 3,
  },
  modalView: {
    width: 200,
    height: 300,
    borderRadius: 20,
    backgroundColor: '#343434',
  },
  setButton: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#00c1c0',
    height: 50,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute'
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  orderItem: {
    color: '#fff',
    alignItems: "center",
    justifyContent: 'center',
    margin: 31,
  },
  orderBox: {
    borderBottomColor: '#fff',
    borderBottomWidth: 0.7
  }
})



export default ModalFilter;