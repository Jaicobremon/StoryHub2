import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStory extends React.Component{
    render(){
        return(
            <View style={{ 
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center' }}>
                <Text>Read one of the stories !</Text>
            </View>
        )
    }
}