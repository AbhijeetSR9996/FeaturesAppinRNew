import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  PanResponder
} from 'react-native';

const ClickLocation = () => {
  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);

  //panResponder initialization
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture:
      (event, gestureState) => true,
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture:
      (event, gestureState) => false,
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      //After the change in the location
      setLocationX(event.nativeEvent.locationX.toFixed(2));
      setLocationY(event.nativeEvent.locationY.toFixed(2));
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          React Native Get Clicked Location of Touchscreen
          Using PanResponder.
        </Text>
        
        <View style={styles.childViewStyle}>
          {/*Text to show the screen location we get*/}
          <Text
            style={[
              {
                top: parseFloat(locationY - 15),
                left: parseFloat(locationX - 15),
              },
            ]}>
            X: {locationX}, Y: {locationY}
          </Text>
          {/*View to show green dot where user touched*/}
          <View
            style={[
              styles.pointStyle,
              {
                top: parseFloat(locationY - 2),
                left: parseFloat(locationX - 11),
              },
            ]}
          />
          {/* Marking touched position */}
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent'
            }}
            {...panResponder.panHandlers}
          />
        </View>
        <Text style={styles.titleStyle}>
        🙂 Touch to see magic 🙂.
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default ClickLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  childViewStyle: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#F5FCFF',
    borderColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  pointStyle: {
    height: 22,
    width: 22,
    marginTop: 5,
    position: 'absolute',
    borderRadius: 14,
    backgroundColor: '#00FF30',
  },
});