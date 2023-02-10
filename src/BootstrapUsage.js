import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const
  BODY_COLOR = '#000022',
  TEXT_PRIMARY = '#882288';

// custom constants
const constants = {
  BODY_COLOR, TEXT_PRIMARY,
};

// custom classes
const classes = {
  title: {
    color: 'red',
  }
};

const bootstrapStyleSheet = new BootstrapStyleSheet(constants, classes);
const { styles: s, constants: c } = bootstrapStyleSheet;

class BootstrapUsage extends Component {
  render() {
    return (
      <View style={[s.body]}>
        <View style={[s.container, s.h100, s.justifyContentCenter]}>
          <Text style={[s.text, s.title]}>Hello User!!</Text>
          <Text style={[s.text, s.textPrimary, s.myXs1, s.myMd3]}>Demo Text for bootstrap Usage in React Native</Text>
          <Text style={[s.text, s.py3, {fontSize: 2 * c.REM}]}>🤓🚀🚀🚀</Text>
        </View>
      </View>
    );
  }
}

export default BootstrapUsage;
