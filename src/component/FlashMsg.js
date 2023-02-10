import React from "react";
import { StyleSheet, View, Text, } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
//import { Colors } from "react-native/Libraries/NewAppScreen";

  const FlashMsg = () => {
  return (
    <>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Example</Text>
              <Text style={styles.sectionDescription}> You could
                <Text style={styles.highlight} onPress={() => showMessage({ message: "Hi There..!!" })}> press here </Text>
                to see FlashMessage.
              </Text>
            </View>
          </View>
      <FlashMessage statusBarHeight={10} />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    //backgroundColor: Colors.lighter,
      backgroundColor: 'grey'
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: 'grey',
  },
  highlight: {
    fontWeight: "700",
  },
  footer: {
    color: 'grey',
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
});

export default FlashMsg;
