import React, {useState} from 'react';
import {View, StyleSheet, Modal, Button, Text} from 'react-native';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal}>
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello code</Text>
            <Button title="close modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.butttonView}>
        <Button title="Open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 0,
  },
  butttonView: {
    flex: 0,
    justifyContent: 'flex-end',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
  },
  modalView: {
    backgroundColor: 'white',
    padding: 35,
    borderRadius: 20,
    shadowColor: '#000',
    elevation: 5,
  },
});
export default App;
