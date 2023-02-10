import React
, { Component } from "react";
import {
    SafeAreaView
    , ScrollView
    , StyleSheet
    , Text
    , View
} from "react-native";

class Usage extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollContentContainer}
                >
                    <View style={styles.box}>
                        <Text style={styles.text}>Object before Transforming</Text>
                    </View>
                    <View style={[styles.box, {
                        transform: [
                            { skewX: "35deg" },
                            { skewY: "35deg" }
                        ]
                    }]}>
                        <Text style={styles.text}>Skewing X-axis & Y-axis by 35 deg</Text>
                    </View>
                    <View style={[styles.box, {
                        transform: [{ skewX: "30deg" }]
                    }]}>
                        <Text style={styles.text}>Skewing X-axis by 30 deg</Text>
                    </View>
                    <View style={[styles.box, {
                        transform: [{ skewY: "30deg" }]
                    }]}>
                        <Text style={styles.text}>Skewing Y-axis by 30 deg</Text>
                    </View>
                    <View style={[styles.box, {
                        transform: [{ translateX: -45 }]
                    }]}>
                        <Text style={styles.text}>Translating X-axis by -45</Text>
                    </View>
                    <View style={[styles.box, {
                        transform: [{ translateY: 45 }]
                    }]}>
                        <Text style={styles.text}>Translating Y-axis by 45</Text>
                    </View>
                    <View style={[styles.box, {
                        transform: [{ scale: 1.6 }]
                    }]}>
                        <Text style={styles.text}>Scale Whole Object by 1.6</Text>
                    </View>
                    <View style={[styles.box, {
                        transform: [{ scaleX: 2.5 }]
                    }]}>
                        <Text style={styles.text}>Scale X-axis by 2.5</Text>
                    </View>
                    <View style={[styles.box, {
                        transform: [{ scaleY: 1.8 }]
                    }]}>
                        <Text style={styles.text}>Scale Y-axis by 2.5</Text>
                    </View>
                    <View style={[styles.box, {
                        transform: [{ rotate: "30deg" }]
                    }]}>
                        <Text style={styles.text}>Rotating whole by 30 degree</Text>
                    </View>
                    <View style={[styles.box, {
                        transform: [
                            { rotateX: "30deg" },
                            { rotateZ: "30deg" }
                        ]
                    }]}>
                        <Text style={styles.text}>Rotating X-axis & Z-axis by 30 deg</Text>
                    </View>
                    <View style={[styles.box, {
                        transform: [
                            { rotateY: "30deg" },
                            { rotateZ: "30deg" }
                        ]
                    }]}>
                        <Text style={styles.text}>Rotating Y-axis & Z-axis by 30 deg</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContentContainer: {
        alignItems: "center",
        paddingBottom: 55
    },
    box: {
        height: 99,
        width: 99,
        borderRadius: 5,
        marginVertical: 39,
        backgroundColor: "#e675f0",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        margin: 6,
        color: "#fffa5e",
        textAlign: "center"
    }
});
export default Usage;