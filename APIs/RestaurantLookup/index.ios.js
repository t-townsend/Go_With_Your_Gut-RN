import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './app/navigator/AppNavigator';

class RestaurantLookup extends Component {
  render(){
    return(
      <AppNavigator
        initialRoute={{ident: "Search"}} />
    )
  }
}

AppRegistry.registerComponent('RestaurantLookup', () => RestaurantLookup);
