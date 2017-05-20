import React, { Component } from 'react';
import{
  Navigator,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform
}from 'react-native';

const Inicio = require('./components/Inicio');
const Publicaciones = require('./components/Publicaciones');

Header = require('./components/Header');//componente

Styles = require('./components/Styles');
BotonNativo = (Platform.OS === 'ios') ? TouchableHighlight : TouchableNativeFeedback;

export default class App extends Component{

  render(){
    return(
      <Navigator
        initialRoute={{ title: 'MemoWeek', index: 0 , name:'inicio'}}
        renderScene={(route, navigator) =>{

          if ( route.name == 'inicio' ) return (<Inicio navigator={navigator} />)

          if(route.name == 'publicaciones') return(<Publicaciones navigator={navigator} />)


        }}
      />

    );
  };

};

module.exports = App;
