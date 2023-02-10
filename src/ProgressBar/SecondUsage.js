import React, {Component} from 'react';
import {ProgressBarAndroid, StyleSheet, View} from 'react-native';


export default class SecondUsage extends Component {
render() {
return (
<View style={progressStyles.containerStyle}>
<ProgressBarAndroid />
<ProgressBarAndroid styleAttr="Horizontal" />
<ProgressBarAndroid styleAttr="Horizontal" color="black" />
<ProgressBarAndroid
styleAttr="Horizontal"
indeterminate={false}
progress={0.3}
/>
</View>
);
}
}
const progressStyles = StyleSheet.create({
containerStyle: {
flex: 1,
justifyContent: 'space-evenly',
padding: 11,
},
});