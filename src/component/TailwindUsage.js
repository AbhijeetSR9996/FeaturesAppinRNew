import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const TailwindUsage = () => (
  <View style={tw`p-4 android:pt-2 bg-red-400 flex-row`}>
    <Text style={tw`text-md tracking-wide`}>Demo text for TailwindUsage in React Native..!!</Text>
  </View>
);

export default TailwindUsage;