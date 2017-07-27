import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import Voting from './Voting';

export default class WinningOption extends React.Component{

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <View className='voting'>
        <Text>Winner: {this.props.winner}</Text>
        <Button title="restart" onPress={ this.props.resetState }></Button>
      </View>
    )
  }
};
