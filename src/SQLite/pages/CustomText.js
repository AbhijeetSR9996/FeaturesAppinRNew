import React from 'react';
import { StyleSheet, Text } from 'react-native';

const CustomText = props => {
return <Text style={styles.text}>{props.text}</Text>;
};
const styles = StyleSheet.create({ text: {
color: '#111825',
fontSize: 19,
marginTop: 15,
marginLeft: 36,
marginRight: 36,
},
});
export default CustomText;
