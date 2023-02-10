import React, {Component} from 'react';
import { StyleSheet, View, Animated} from 'react-native';

export default class FirstUsage extends Component {
state={
progressStatusValue: 0,
}
animation = new Animated.Value(0); //initialisation of Animated component to with initial value as the zero for start of the progress bar.
componentDidMount(){
this.onAnimation(); //calling onAnimation function with changing the value of the initial progress status value.
}
onAnimation = () =>{
this.animation.addListener(({value})=> {
this.setState({progressStatusValue: parseInt(value,10)});
});
Animated.timing(this.animation,{
toValue: 100, //value at which it need to reach for end of the progress bar
duration: 60000, //duration till the progress bar will continue
}).start();
}
render() {
return (
<View style={progressStyles.containerStyle}>
<Animated.View
style={[
progressStyles.innerStyle,{width: this.state.progressStatusValue +"%"},
]}
/>
<Animated.Text style={progressStyles.label}>
{this.state.progressStatusValue }%
</Animated.Text>
</View>
);
}
}
//basic styles for creation of progress bar
const progressStyles = StyleSheet.create({
containerStyle: {
width: "100%",
height: 40,
padding: 3,
borderColor: "#FAA",
borderWidth: 3,
borderRadius: 30,
marginTop: 200,
justifyContent: "center",
},
innerStyle:{
width: "100%",
height: 31,
borderRadius: 16,
backgroundColor:"green",
},
label:{
fontSize:24,
color: "black",
position: "absolute",
zIndex: 1,
alignSelf: "center",
}
});