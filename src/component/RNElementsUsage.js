import React from "react";
import { Alert, View, StyleSheet } from "react-native";
import { AirbnbRating, Rating } from "react-native-elements";

export default function RNElementsUsage() {
  function setRating(rating) {
    Alert.alert("Rating is: " + rating);
  }
  return (
    <View style={styles.container}>
      <AirbnbRating
        count={5}
        reviews={["Terrible", "Meh", "Good", "Very Good", "Amazing"]}
        defaultRating={5}
        size={20}
        onFinishRating={setRating}
      />
      <AirbnbRating
        selectedColor="green"
        reviewColor="green"
        count={5}
        reviews={["Terrible", "Meh", "Good", "Very Good", "Amazing"]}
        defaultRating={5}
        size={20}
        onFinishRating={setRating}
      />
      <Rating
        startingValue={1}
        ratingCount={5}
        imageSize={60}
        onFinishRating={setRating}
        fractions={1}
        showRating
      />
      <Rating
        type="rocket"
        startingValue={1}
        ratingCount={5}
        imageSize={60}
        onFinishRating={setRating}
        fractions={1}
        showRating
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});