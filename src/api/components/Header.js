import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
} from 'react-native';

export default class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={Styles.contHeader}>
            </View>
        )
    }
}

module.exports = Header;