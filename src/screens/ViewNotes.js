import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {Text, FAB, List} from 'react-native-paper';
import Header from '../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {addnote, deletenote} from '../redux/actions/notesAppActions';
import {getList} from '../redux/actions/apiActions';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import TestModal from './TestModal';

function ViewNotes({navigation}) {
  const notes = useSelector(state => state.notesReducer);
  const movies = useSelector(state => state.apiReducer);
  const [modalVisible, setModalVisible] = useState(false);
  const [title,setTitle] = useState('');
  const dispatch = useDispatch();
  const addNote = note => dispatch(addnote(note));
  const deleteNote = id => dispatch(deletenote(id));
  const getMovieList = () => dispatch(getList());
  useEffect(() => {
    // getMovieList();
    console.log('movies' + movies);
    console.log('notes', notes);
  });
  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          //width: "86%",
          backgroundColor: '#CED0CE',
          //marginLeft: "14%"
        }}
      />
    );
  };
  // const renderModal = () => {
  //   return (
  //     <View style={{ marginTop: 22 }}>
  //       <Modal
  //       transparent
  //         animationType="slide"
  //         transparent={false}
  //         visible={modalVisible}
  //         onRequestClose={() => {
  //           Alert.alert('Modal has been closed.');
  //         }}>
  //         <View style={{ marginTop: 22 }}>
  //           <View>
  //             <Text>Hello World!</Text>

  //             <TouchableHighlight
  //               onPress={() => {
  //                 setModalVisible(!modalVisible);
  //               }}>
  //               <Text>Hide Modal</Text>
  //             </TouchableHighlight>
  //           </View>
  //         </View>
  //       </Modal>
  //     </View>
  //   );
  // }
  return (
    <>
      <Header titleText="Simple note taker" />
      <View style={styles.container}>
        {notes.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You do not have any notes</Text>
          </View>
        ) : (
          <FlatList
            data={notes}
            ItemSeparatorComponent={renderSeparator}
            renderItem={({item}) => (
              // <List.Item
              //   title={item.note.noteTitle}
              //   description={item.note.noteValue}
              //   descriptionNumberOfLines={1}
              //   titleStyle={styles.listTitle}
              //   onPress={() => deleteNote(item.id)}
              // />
              <TouchableWithoutFeedback
                onPress={() => {
                  setModalVisible(true);
                  setTitle(item.note.noteTitle)
                }}>
                <View style={styles.listItemView}>
                  <Text style={styles.listItemText}>{item.note.noteTitle}</Text>
                  <Text>{item.note.noteValue}</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
            // ItemSeparatorComponent = {
            //   //return (
            //     <View
            //       style={{
            //         height: 1,
            //         width: "100%",
            //         backgroundColor: "#000",
            //       }}
            //     />
            // //  );
            // }
            keyExtractor={item => item.id.toString()}
          />
        )}
        <FAB
          style={styles.fab}
          small
          icon="plus"
          label="Add new note"
          onPress={() => navigation.navigate('AddNotes', {addNote})}
        />
      </View>
      {modalVisible && (
        <TestModal
          title={title}
          onClose={() => setModalVisible(false)}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10,
  },
  listTitle: {
    fontSize: 20,
  },
  listItemView: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    backgroundColor: 'yellow',
  },
  listItemText: {fontSize: 20, color: 'green'},
});

export default ViewNotes;
