import React, {useState} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

function TestModal({onClose, title}) {
  //const [modalVisible, setModalVisible] = useState(false);
  //const {onClose} = props;
  return (
    <View >
      <Modal
        animationType="slide"
        transparent
        visible
        onRequestClose={() => null}>
        <View style={{marginTop: 22,padding : 15, }}>
          <View>
            <Text>{title}</Text>

            <TouchableHighlight
              onPress={() => {
                onClose();
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default TestModal;
