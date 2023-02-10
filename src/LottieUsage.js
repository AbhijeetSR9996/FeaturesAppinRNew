import React, {useRef, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text,StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';

const App = () => {
  let animationRef = useRef();
  useEffect(() => {
    animationRef.play();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
      <StatusBar
barStyle="light-content"
hidden={true}
backgroundColor="#b3e6ff"
translucent={false}
networkActivityIndicatorVisible={false}
/>
        <Text style={styles.header}>
          React Native Lottie Component alongwith StatusBar customization for Android and iOS
        </Text>
        <LottieView
          ref={(animation) => {
            animationRef = animation;
          }}
          source={require('./assets/animation.json')}
          autoPlay
          loop
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 18,
    textAlign: 'center',
  },
});