import {StyleSheet,Dimensions,Platform} from 'react-native';
const window = Dimensions.get('window');
const colorPrimary = '#538D98';//rgba(146, 198, 255, 0.7) rgba(0, 240, 177, 0.7); rgba(43, 94, 89, 0.8);
const colorAccent = 'rgba(146, 198, 255, 0.7)';
const CIRCLE = 50;
const HEADER = 70;


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colorPrimary,
  },

  //**************************************************
  //INICIO
  //**************************************************


  contCircle:{
      flexDirection:'row',
  },

  circle:{
    backgroundColor:'#CCC',
    width:CIRCLE * 2,
    height:CIRCLE *2,
    borderRadius:CIRCLE,
  },

  //**************************************************
  //END INICIO
  //**************************************************

  //**************************************************
  //HEADER
  //**************************************************
  contHeader:{
    height: HEADER,
    width:window.width,
    backgroundColor:colorAccent,
  }


  //**************************************************
  //END HEADER
  //**************************************************

});

module.exports = styles;
