import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import OAuthSimple from 'oauthsimple';
import { CONSUMER_KEY, CONSUMER_SECRET, TOKEN, TOKEN_SECRET } from 'react-native-dotenv';



export default class Search extends Component {
  state = {
    position: 'unknown'
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({position});
      },
      (error) => alert(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  };

  fetchData(){
    const lat = this.state.position.coords.latitude;
    const lng = this.state.position.coords.longitude;
    const latlng = "ll=" + String(lat) + "," + String(lng);

    var consumerKey = ApiClient.init(CONSUMER_KEY);

    var consumerSecret = ApiClient.init(CONSUMER_SECRET);

    var tokenSecret = ApiClient.init(TOKEN_SECRET);

    var token = ApiClient.init(TOKEN);

    const oauth = new OAuthSimple(consumerKey, tokenSecret)
    const request = oauth.sign({
      action: "GET",
      path: "https://api.yelp.com/v2/search",
      parameters: "term=sushi&" + latlng,
      signitures: {api_key: consumerKey, shared_secret: consumerSecret, access_token:token,
      access_secret: tokenSecret},

    })
    const nav = this.props.navigator;

    fetch(request.signed_url, {method: "GET"}).then(function(response){
      return response.json()
    }).then(function(data){
      nave.push({
        ident: "Results",
        data: data
      })
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

module.exports = Search
