import React from 'react';
import { View
, Text
, StyleSheet
, TouchableOpacity
, ImageBackground
, Image
} from 'react-native';

const RNJustifyContent = () => {
return (
<ImageBackground
source={
{
uri:
'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
}
}

style={
{
flex: 1
}
}
>
<View style={{
flex: 1,
flexDirection: 'column' ,
justifyContent: 'space-between' ,
alignItems: 'stretch'
, borderWidth: 10
, textAlign: 'center'
, borderRadius: 100
, borderColor: '#0d2fb8'
}}>
<View style={{width: 50
, height: 50
, backgroundColor: '#ed98c2'
, borderWidth: 10
, textAlign: 'center'
, borderRadius: 100
, borderColor: '#7203a6'
, justifyContent: 'space-between'}} >
<ImageBackground
// source={{
// uri:
// 'http://pngimg.com/uploads/labrador_retriever/small/labrador_retriever_PNG87.png',
// }}
source={require('../src/assets/ipad.jpeg')}
style={{
height: 120,
marginTop: 10,
width: 120,
}}
>
<Text
style={{
flex: 1
, alignItems: "center"
, justifyContent: "center"
, color: "#c90c3f"
}}>
EDUCBA
</Text>
</ImageBackground>
</View>
<View style={{height: 50
, backgroundColor: '#97f0df'
, borderWidth: 10
, textAlign: 'center'
, borderRadius: 100
, borderColor: '#a30559'
, justifyContent: 'space-between'}} >
<ImageBackground
// source={{
// uri:
// 'http://pngimg.com/uploads/labrador_retriever/small/labrador_retriever_PNG83.png',
// }}
source={require('../src/assets/ipad.jpeg')}
style={{
height: 140,
marginTop: 10,
width: 120,
}}
>
<Text
style={{
flex: 1
, alignItems: "center"
, justifyContent: "center"
, color: "#c90c3f"
}}>
Welcomes
</Text>
</ImageBackground>
</View>
<View style={{height: 100
, backgroundColor: '#eef09c'
, borderWidth: 10
, textAlign: 'center'
, borderRadius: 100
, borderColor: '#03a670'
, justifyContent: 'space-between'}} >
<ImageBackground
// source={{
// uri:
// 'http://pngimg.com/uploads/dog/small/dog_PNG161.png',
// }}
source={require('../src/assets/lock.jpeg')}
style={{
height: 120,
marginTop: 10,
width: 120,
}}
>
<Text
style={{
flex: 1
, alignItems: "center"
, justifyContent: "center"
, color: "#c90c3f"
}}>
You
</Text>
</ImageBackground>
</View>
</View>
</ImageBackground>
);
};
export default RNJustifyContent;