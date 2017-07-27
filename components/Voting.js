import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';

export default class Voting extends React.Component{

  constructor(props) {
    super(props)
    this.handleVotingButtonPressed = this.handleVotingButtonPressed.bind(this)
  }

  handleVotingButtonPressed(entry) {
    const otherOption = this.props.pair.find((option) => option != entry)
    this.props.removeFromOptionsAndPickNextState(otherOption)
  }

  renderVotingButton(entry) {
    return (
      <Button title={entry} key={entry} onPress={() => this.handleVotingButtonPressed(entry)} />
    )
  }

  render() {
    const votingButtons = this.props.pair.map((entry) => this.renderVotingButton(entry))
    return (
      <View className='voting'>
        {votingButtons}
      </View>
    )
  }
};
