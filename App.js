import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Voting from './components/Voting';

export default class App extends React.Component {
  var pair = ['Sushi', 'Italian'];

  render() {
    return (
      <View style={styles.container}>
        <Voting pair={pair}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
