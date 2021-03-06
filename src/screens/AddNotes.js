import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton, TextInput, FAB} from 'react-native-paper';
import Header from '../components/Header';

function AddNotes({navigation}) {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteValue, setNoteValue] = useState('');
  function onSaveNote() {
    navigation.state.params.addNote({noteTitle, noteValue});
    navigation.goBack();
  }
  return (
    <>
      <Header titleText="Add a new note" />

      <View style={styles.container}>
        <TextInput
          label="Add Title Here"
          value={noteTitle}
          mode="outlined"
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label="Add Note Here"
          value={noteValue}
          onChangeText={setNoteValue}
          mode="flat"
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyType="done"
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          small
          icon="check"
          disabled={noteTitle == '' ? true : false}
          onPress={() => onSaveNote()}
        />
      </View>
      <IconButton
        icon="close"
        size={25}
        color="black"
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  iconButton: {
    backgroundColor: 'rgba(46, 113, 102, 0.8)',
    position: 'absolute',
    right: 0,
    top: 0,
    margin: 10,
    elevation : 10 // must use this for android
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    height: 300,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
});

export default AddNotes;
