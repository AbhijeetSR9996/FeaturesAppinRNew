import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

class RNStyling extends Component {
    render() {
        return (
            <View style={styles.background}>
                <View style={styles.app} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    background: {
        flex: 2,
        borderColor: "#ed47a8", borderWidth: 20, backgroundColor: "#af5801"
    },
    app: {
        margin: "auto", maxWidth: 361,
        maxHeight: 641,
        width: 361,
        height: 641, backgroundColor: "#55d4be", borderWidth: 50, borderColor: "#daff5e"
    }
});
export default RNStyling;