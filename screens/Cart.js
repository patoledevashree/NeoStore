import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default function Dashboard(){
    return(
        <View style={styles.container}>
            <Text>Dashboard</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        marginVertical:60,
        marginHorizontal:50
    }
})