import React from 'react';
import { TouchableOpacity
, Text
, StyleSheet } from 'react-native';

const CustomButton = props => {
return (
<TouchableOpacity style={styles.button} onPress={props.customClick}>
<Text style={styles.text}>{props.title}</Text>
</TouchableOpacity>
);
};
const styles = StyleSheet.create({ button: {
alignItems: 'center',
backgroundColor: '#df36eb',
color: '#ffffff',
padding: 11,
marginTop: 15,
marginLeft: 36,
marginRight: 36,
},
text: {
color: '#ffffff',
},
});
export default CustomButton;