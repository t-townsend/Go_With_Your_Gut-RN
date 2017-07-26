import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';

export default class Voting extends React.Component{
  static getPair = {
    return this.props.pair || [];
  },

  render(){
    return(
      <View className='voting'>
        {this.getPair().map(entry =>
          <Button key={entry}>
            <Text>{entry}</Text>
          </Button>
        )}
      </View>;
    )
  }
};
