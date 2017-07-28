import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import OAuthsimple from 'oauthsimple';


export default class RestaurantLookup extends Component {
  state = {
    position: 'unknown'
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({position});
      },
      (error) => alert(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge:1000}
    )
  };

  fetchData(){

  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Restaurant Lookup
        </Text>
        <TouchableOpacity
          style={{borderRadius: 7, padding: 10, backgroundColor: 'rgb(37, 160, 205)'}}
          onPress={this.fetchData.bind(this)}>
          <Text style={{fontSize: 15}}>Find Restaurant</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RestaurantLookup', () => RestaurantLookup);
