// Control Device Brightness from React Native App
// https://aboutreact.com/react-native-screen-brightness/

// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

//Import Screen brightness control library
import DeviceBrightness from '@adrianso/react-native-device-brightness';

//Import Slider to change the brightness
import Slider from '@react-native-community/slider';

const RScreenBrightCont = () => {
  const [brightness, setBrightness] = useState(0.2);

  useEffect(() => {
    DeviceBrightness.setBrightnessLevel(brightness);
  }, []);

  const getBrightness = async () => {
    const brightness = await DeviceBrightness.getBrightnessLevel();
    alert('brightness ' + brightness);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>
          Control Device Brightness from React Native RScreenBrightCont
        </Text>
        <Text style={styles.textStyle}>
          Current Brightness: {'\n'} {brightness}
        </Text>
        {/*Slider with max, min, step and initial value*/}
        <Slider
          maximumValue={1}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={0.1}
          value={brightness}
          onValueChange={(brightness) => {
            setBrightness(brightness);
            DeviceBrightness.setBrightnessLevel(brightness);
          }}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={getBrightness}>
          <Text style={styles.buttonTextStyle}>
            Get Current Brightness Value
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RScreenBrightCont;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 16,
    color: 'black',
    padding: 10,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});