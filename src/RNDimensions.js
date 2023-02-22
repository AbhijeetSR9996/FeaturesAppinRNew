// React Native Dimensions – To Get Device Height Width in React Native
// https://aboutreact.com/react-native-get-device-height-and-width-on-button-click/

// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

const RNDimensions = () => {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');

  useEffect(() => {
    //Get device Height
    setHeight(Dimensions.get('window').height);
    //Get device Width
    setWidth(Dimensions.get('window').width);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.header}>
          React Native Dimensions
          {'\n'}
          To Get Device Height Width in React Native
        </Text>
        <Text style={styles.textStyle}>
          Device height: {height}, width: {width}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default RNDimensions;