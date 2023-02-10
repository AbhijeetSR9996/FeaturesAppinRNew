import React
, { useCallback } from "react";
import {
    Alert
    , Button
    , Linking
    , StyleSheet
    , View
    , Text
    , SafeAreaView
} from "react-native";

const supportedURL = "https://www.educba.com/";
const unsupportedURL = "sms: +123456789";

const SendIntentButton
    = (
        {
            action
            , extras
            , children
        }
    ) => {
        const handlePress
            = useCallback(
                async () => {
                    try {
                        await Linking.sendIntent(action, extras);
                    } catch (e) {
                        Alert.alert(e.message);
                    }
                }, [action, extras]);
        return <Button
            title={children}
            onPress={handlePress}
            color="#ed213c" />;
    };

const OpenURLButton = (
    {
        url
        , children
    }
) => {
    const handlePress
        = useCallback(async () => {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
            }
        }, [url]);
    return <Button
        title={children}
        onPress={handlePress}
        color="#922ce6" />;
};

const Opentel = (
    {
        children
    }
) => {
    const handlePress
        = useCallback(
            async () => {
                await Linking.openSettings();
            }, []);
    return <Button
        title={children}
        onPress={handlePress}
        color="#e62c7f" />;
};

const Separator = () => (
    <View style={styles.separator} />
);
const Usage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    For Getting More Information about Us:
                </Text>
                <OpenURLButton url={supportedURL}>Click to Visit our Website</OpenURLButton>
            </View>
            <View>
                <Text style={styles.title}>
                    For Getting More Information about Us:
                </Text>
                <SendIntentButton action="android.intent.action.POWER_USAGE_SUMMARY">
                    Battery Usage Summary
                </SendIntentButton>
            </View>
            <View>
                <Text style={styles.title}>
                    For Getting More Information about Us:
                </Text>
                <SendIntentButton
                    action="android.intent.action.settings.APP_NOTIFICATION_SETTINGS"
                >
                    Notification Settings
                </SendIntentButton>
            </View>
            <View>
                <Text style={styles.title}>
                    For Getting Assistance over Chat:
                </Text>
                <OpenURLButton url={unsupportedURL}>Click to Send us SMS</OpenURLButton>
            </View>
            <View>
                <Text style={styles.title}>
                    For Changing the Application Settings:
                </Text>
                <Opentel>Click Here for Settings</Opentel>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1
        , justifyContent: "center"
        , alignItems: "center"
        , backgroundColor: "#faed75"
    },
    title: {
        textAlign: 'center',
        marginVertical: 10,
    },
    separator: {
        marginVertical: 200,
        borderBottomColor: '#d94e9a',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
export default Usage;