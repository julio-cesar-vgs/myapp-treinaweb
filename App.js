import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextCounter from './TextCounter';
import {Constants} from 'expo';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextCounter limit={150} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft:15,
    paddingRight:15,
    paddingTop: Constants.statusBarHeight + 5,
    
  },
});
