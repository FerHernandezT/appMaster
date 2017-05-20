import React, { Component } from 'react';
import{
  Text,
  Image,
  View,
}from 'react-native';



export default class Inicio extends Component{
  constructor(props){
    super (props);
    this.state = {
      pagina: 'inicio',
    }
  }

  onInicio(){
    console.log("CLICK");
    this.props.navigator.push({name:'publicaciones'});
  }

  render(){
    return(
      <View style={Styles.container}>

        <View>
          <Text>MemoWeek</Text>
        </View>

        <BotonNativo  onPress={() => this.onInicio()} underlayColor='rgba(0, 0, 0, 0)'>
          <View style={Styles.contCircle}>
              <View style={Styles.circle}>
              </View>

              <View style={Styles.circle}>
              </View>
          </View>
        </BotonNativo>

      </View>
    );
  };

};


module.exports = Inicio;
