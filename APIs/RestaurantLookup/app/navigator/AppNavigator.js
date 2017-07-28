import React, {Component} from 'react';
import {Navigator} from 'react-native';
import Search from '../components/Search';

export default class AppNavigator extends Component {

  renderScene(route, navigator){
    const globalNavigatorProps = { navigator }
    switch(route.ident) {
      case "Search":
      return(
        <Search
          {...globalNavigatorProps}/>
      )
    }
  }

  render(){
    return(
        <Navigator
          initialRoute={this.props.initialRoute}
          renderScene={this._renderScene}
          configureScene={(route => Navigator.SceneConfigs.FloatFromRight)}/>
    )
  }
}

module.exports = AppNavigator;
