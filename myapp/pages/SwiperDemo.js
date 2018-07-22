/**
 * Created by Kuang on 2018/7/21.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Alert,
} from 'react-native';

//var Swiper = require('react-native-swiper2')
export default class TextInputDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
		        <Text style={{height:40}}>kkp</Text>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        flexWrap:'wrap',
    }
});
