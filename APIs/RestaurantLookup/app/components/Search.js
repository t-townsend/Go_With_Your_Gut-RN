import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import OAuthSimple from 'oauthsimple';


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
    const lat = this.state.position.coords.latitude;
    const lng = this.state.position.coords.longitude;
    const latlng = "ll=" + String(lat) + "," + String(lng);

    var consumerKey = "***"

    var consumerSecret = "***"

    var tokenSecret = "***"

    var token = "***"
    
    const oauth = new OAuthSimple(consumerKey, tokenSecret)
    const request = oauth.sign({
      action: "GET",
      path: "https://api.yelp.com/v2/search",
      parameters: "term=sushi&" + latlng,
      signitures: {api_key: consumerKey, shared_secret: consumerSecret, access_token:token,
      access_secret: tokenSecret},

    })
    fetch(request.signed_url, {method: "GET"}).then(function(response){
      return response.json()
    }).then(function(data){
debugger
    }).catch(function(error){
      console.log("Error:", error)
    })

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
