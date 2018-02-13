import { View, TouchableHighlight, Text } from 'react-native';
import React, { Component } from 'react';


export default Button = (props) => {
    return (
        <TouchableHighlight
            onPress={props.onPress}
            style={{
                backgroundColor: 'dodgerblue',
                borderRadius: 4,
                      backgroundColor: 'rgb(255,255,255)',
                      borderColor: 'rgb(200,200,200)',
                      borderWidth: 1,
                      margin: 0,
                width: props.width || 50,
                height: props.height || 50,
                marginBottom: 10,
                elevation: 2
            }}
            elevation={5}
            underlayColor={props.underlayColor || "white"}>
            <View
                elevation={5}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    shadowColor: '#000000',
                    shadowOffset: {
                        width: 0,
                        height: 3
                    },
                    shadowRadius: 5,
                    shadowOpacity: 1.0

                }}>
               <Text 
               style={{
                   fontSize: 22
               }}>{props.text}</Text>
            </View>
        </TouchableHighlight>
    )
}