// import {SafeAreaView, StyleSheet,} from 'react-native';
// import React from 'react';
// import Slider from './src/component/Slider';

// const App = () => {
//   return (
//     <SafeAreaView>
//       <Slider />
//     </SafeAreaView>
//   );
// };

// export default App;
// const styles = StyleSheet.create({});



import React, { useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { ImagePickerHeader } from './src/component/image-picker-header';
import { ImagePickerModal } from './src/component/image-picker-modal';
import { ImagePickerAvatar } from './src/component/image-picker-avatar';

export default function App() {
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);

  const onCameraPress = useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setPickerResponse);
  }, []);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  return (
    <View style={styles.screen}>
      <ImagePickerHeader />
      <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)} />
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f2f2fC',
  },
});






