import React
, { useRef } from "react";
import {
    Button
    , StyleSheet
    , Text
    , View
} from "react-native";
import { animated } from "@react-spring/native";

constAnimatedView = animated(View);

const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 100,
        margin: 15,
        backgroundColor: "pink"
    },
    text: {
        color: "white"
    }
});

export default function RNColor() {
    const cache = useRef({
        toggle1: false,
        toggle2: false
    });
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    return (
        <View>
            <View ref={ref1} style={styles.item}>
                <Text style={styles.text}>BOX 1</Text>
            </View>
            <Button
                onPress={() => {
                    cache.current.toggle1 = !cache.current.toggle1;
                    ref1.current.setNativeProps({
                        style: { backgroundColor: cache.current.toggle1 ? "lightgreen" : "orange" }
                    });
                }}
                title=" Box 1 - Change Color"
            />
            <View ref={ref2} style={styles.item}>
                <Text style={styles.text}>BOX 2</Text>
            </View>
            <Button
                onPress={() => {
                    cache.current.toggle2 = !cache.current.toggle2;
                    ref2.current.setNativeProps({
                        style: { backgroundColor: cache.current.toggle2 ? "purple" : "brown" }
                    });
                }}
                title="Box 2 - Change Color"
            />
        </View>
    );
}