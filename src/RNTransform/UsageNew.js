import React from 'react';
import { StyleSheet
, View
, Animated
, Image
, Easing } from 'react-native';

export default class UsageNew extends React.Component {
constructor() {
super();
this.RotateValueHolder = new Animated.Value(0);
}
componentDidMount() {
this.StartImageRotateFunction();
}
StartImageRotateFunction() {
this.RotateValueHolder.setValue(0);
Animated.timing(this.RotateValueHolder, {
toValue: 1,
useNativeDriver:'false',
duration: 4000,
easing: Easing.linear,
}).start(() => this.StartImageRotateFunction());
}
render() {
const RotateData = this.RotateValueHolder.interpolate({
inputRange: [0, 1],
outputRange: ['0deg', '360deg'],
});
const RotateData1 = this.RotateValueHolder.interpolate({
inputRange: [0, 1],
outputRange: ['360deg', '0deg'],
});
return (
<View style={styles.container}>
<Animated.Image
style={{
width: 200,
height: 100,
transform: [{ rotate: RotateData }],
}}
source={require('../../src/assets/ipad.jpeg')}
/>
<View style={styles.container}>
<Animated.Image
style={{
width: 200,
height: 100,
transform: [{ rotate: RotateData1 }],
}}
source={{
uri:
'https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
}}
/>
</View>
</View>
);
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#f78f65',
},
});