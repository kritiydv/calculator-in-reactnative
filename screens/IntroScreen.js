import React from 'react'
import logo from '../assets/logo.png'
import { StyleSheet, Text, View,Image } from 'react-native';

export const IntroScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.inner}>
            <Image source={logo}/>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        display:'flex',
        
    }


})