import React from 'react';
import { SafeAreaView, Text, Image, Pressable, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import { images } from '../assets';

export function ImagePickerModal({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress,
}) {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.modal}>
        <SafeAreaView style={[styles.buttons,{marginBottom:'10%', marginLeft: '3%',}]}>
          <Text style={[styles.buttonText,{color:'black'}]}>ADD PICTURE</Text>
      </SafeAreaView>
      <SafeAreaView style={[styles.buttons,{alignItems:'stretch',marginHorizontal:'8%'}]}>
         <Pressable style={[styles.button,]} onPress={onClose}>
          {/* <Image style={styles.buttonIcon} source={images.camera} /> */}
          <Text style={styles.buttonText}>CANCEL</Text>
        </Pressable>
        <Pressable style={[styles.button,]} onPress={onImageLibraryPress}>
          {/* <Image style={styles.buttonIcon} source={images.image} /> */}
          <Text style={[styles.buttonText,]}>CHOOSE FROM LIBRARY</Text>
        </Pressable>
        {/* <Pressable style={styles.button} onPress={onCameraPress}>
          <Image style={styles.buttonIcon} source={images.camera} />
          <Text style={styles.buttonText}>Camera</Text>
        </Pressable> */}
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    //justifyContent: 'flex-end',
    justifyContent:'center',
    //margin: 0,
    margin: 50,
    backgroundColor:'white',
    marginVertical:295,
    marginHorizontal:30
  },
  buttonIcon: {
    width: 30,
    height: 30,
    margin: 10,
  },
  buttons: {
    //backgroundColor: 'grey',
    flexDirection: 'row',
    // borderTopRightRadius: 30,
    // borderTopLeftRadius: 30,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginHorizontal:-15
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'green'
  },
});
