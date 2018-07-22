/**
 * Created by Kuang on 2018/7/21.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';
import ingList from '../assets/data/ingList'
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var cols=3;
var margin=10;
var imageWith=(width-(margin*(cols+1)))/3;
export default class ImageDemo extends Component{
    render(){
        return (
            <ScrollView>
            <View style={style.container}>
                {ingList.map((val,index)=>{
                    return  (
                        <View style={style.image} key={index}>
                            <Image  key={index} source={{uri:val.url}} style={{height:140}} />
                            <Text style={{textAlign:'center'}}>{val.title}</Text>
                        </View>
                    )
                })}
            </View>
            </ScrollView>
        );
    }
}
const style=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        flexWrap:'wrap',
    },
    image:{
        height:150,
        width:imageWith,
        marginLeft:margin,
        marginTop:10
    }
})