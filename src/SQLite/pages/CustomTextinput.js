import React from 'react';
import { TouchableHighlight
, Text
, StyleSheet
, TextInput
, View } from 'react-native';

const CustomTextinput = props => {
return (
    <View
    style={{ marginLeft: 36,
    marginRight: 36,
    marginTop: 49,
    borderColor: '#61fab8',
    borderWidth: 1,
    }}>
    <TextInput
    underlineColorAndroid="transparent"
    placeholder={props.placeholder}
    placeholderTextColor="#61fab8"
    keyboardType={props.keyboardType}
    onChangeText={props.onChangeText}
    returnKeyType={props.returnKeyType}
    numberOfLines={props.numberOfLines}
    multiline={props.multiline}
    onSubmitEditing={props.onSubmitEditing}
    style={props.style}
    blurOnSubmit={false}
    value={props.value}
    />
    </View>
    );
    };
export default CustomTextinput;