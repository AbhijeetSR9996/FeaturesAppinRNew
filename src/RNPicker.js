import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

class RNPicker extends Component {
    state = {
        indexvalue: 0
    };
    render() {
        return (
            <View>
                
                    <Picker
                        style={customeStyles.pickerCustomeStyle}
                        selectedValue={this.state.sports}
                        onValueChange={(valueOfItem, positionOfItem) =>
                            this.setState({ sports: valueOfItem, indexvalue: positionOfItem })
                        }
                    >
                        <Picker.Item
                            label="Select sport you like"
                            color="green"
                            value="br"
                        />
                        <Picker.Item label="Cricket" color="pink" value="cr" />
                        <Picker.Item label="Football" color="red" value="fb" />
                        <Picker.Item label="hockey" color="black" value="hc" />
                    </Picker>
            
            </View>
        );
    }
}
const customeStyles = StyleSheet.create({
    pickerCustomeStyle: {
        height: 50,
        width: "80%",
        color: "green",
        justifyContent: "center"
    }
});
export default RNPicker;