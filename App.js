import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Voting from './components/Voting';
import WinningOption from './components/WinningOption';

const shuffleArray = (arr) => arr.sort(() => (Math.random() - 0.5))
const OPTIONS = ['Sushi', 'Italian', 'Burgers', 'Indian', 'Chinese', 'Greek', 'Ice Cream']

// either returns an array, or the winning option
const shuffleOptionsAndPickPair = (options) => {
  const ary = shuffleArray(options)
  return [ary[0], ary[1]]
}

const INITIAL_STATE = {
    options: OPTIONS,
    pair: shuffleOptionsAndPickPair(OPTIONS),
    winningOption: null
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
    this.removeFromOptionsAndPickNextState = this.removeFromOptionsAndPickNextState.bind(this)
    this.resetState = this.resetState.bind(this)
    // this.reRandomizePairs = this.reRandomizePairs.bind(this)
  }

  // fancy function passing callback thingymajig
  // -----------------------
  // removeFromOptions(entry) {
  //   this.setState({
  //     options: this.state.options.filter((option) => option != entry)
  //   }, () => this.reRandomizePairs())
  // }
  //
  // reRandomizePairs() {
  //   this.setState({
  //     pair: shuffleOptionsAndPickPair(this.state.options)
  //   })
  // }

  // simpler way
  removeFromOptionsAndPickNextState(entry) {
    const options = this.state.options.filter((option) => option != entry)
    let pair, winningOption

    if (options.length > 1) {
      pair = shuffleOptionsAndPickPair(options)
    } else {
      winningOption = options[0]
    }

    console.log("REMAINING OPTIONS", options)
    this.setState({ options, pair, winningOption })
  }

  renderVotingButtons() {
    return (
      <Voting pair={this.state.pair}
              removeFromOptionsAndPickNextState={this.removeFromOptionsAndPickNextState}
              reRandomizePairs={this.reRandomizePairs}
            />
    )
  }

  renderWinningOption() {
    return (
      <WinningOption winner={this.state.winningOption}
                    resetState={this.resetState}
      />
    )
  }

  resetState() {
    // this.setState({options: OPTIONS, pair: shuffleOptionsAndPickPair(OPTIONS), winningOption: null})
    this.setState(INITIAL_STATE)
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.winningOption ? this.renderWinningOption() : this.renderVotingButtons()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
