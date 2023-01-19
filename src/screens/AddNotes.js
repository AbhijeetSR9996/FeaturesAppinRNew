import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, FAB } from 'react-native-paper'
import Header from '../components/Header'

function AddNote({ navigation }) {
  const [noteTitle, setNoteTitle] = useState('')
  const [noteValue, setNoteValue] = useState('')

  function onSaveNote() {
    navigation.state.params.addNote({ noteTitle, noteValue })
    navigation.goBack()
  }
  return (
    <>
      <Header titleText='ADD A NEW NOTE' />
      <FAB
          style={[styles.fab,{right:10,top:0,margin:10,backgroundColor:'#f1f1f1'}]}
          size='medium'
          label='❌'
          onPress={() => navigation.goBack()}
        />
      <View style={styles.container}>
        <TextInput
          label='Title'
          value={noteTitle}
          mode='outlined'
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label='Description'
          value={noteValue}
          onChangeText={setNoteValue}
          mode='flat'
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyType='done'
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          small
          //icon='check'
          label='✔️'
          disabled={noteTitle == '' ? true : false}
          onPress={() => onSaveNote()}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    height: 300,
    fontSize: 16
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0
  }
})

export default AddNote