import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imgBanner} source={require('../assets/exa-blue-logo.png')} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
                <Text style={styles.text}>Press Here</Text>
            </TouchableOpacity>

        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    imgBanner: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 100,
        marginTop: 200,
        marginLeft: 40
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#1589FF',
        padding: 15,
        margin: 20,
        marginTop: 50,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25
    },
    container: {
        flex: 1,
        backgroundColor: 'orange'
    }
});