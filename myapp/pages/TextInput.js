/**
 * Created by Kuang on 2018/7/21.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableHighlight,
    Alert
} from 'react-native';
//var ViewPager = require('react-native-viewpager');

export default class TextInputDemo extends Component{
    render(){
        return (
            <View style={style.container}>
                <TextInput style={style.input}
                           keyboardType={'numeric'}
                           clearButtonMode={'while-editing'}
                ></TextInput>
                <TouchableHighlight onPress={this.onPress} style={{height:20,backgroundColor:'#f87def'}}>
                   <Text style={{color:'#fff'}}>点击</Text>
                </TouchableHighlight>
            </View>
        );
    }
    onPress(e){
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }
}
const style=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        flexWrap:'wrap',
    },
    input:{
        height:50,
        width:200,
    }

});
var styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})