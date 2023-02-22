// React Native Platform – To Detect Android or iOS Device
// https://aboutreact.com/example-to-detect-device-is-android-or-ios-in-react-native/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform
} from 'react-native';

const RNPlatform = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.header}>
          React Native Platform
          {'\n'}
          To Get Platform information
        </Text>
        <Text style={styles.textStyle}>
          {/*Here is Platform to get device type*/}
          {
            Platform.OS === 'ios' ?
              'Device is IOS':
              'Device is Android'
          }
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

export default RNPlatform;