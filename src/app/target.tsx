import { router } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';



export default function Target() {
  return (
    <View style={styles.container}>
        <Text>Target</Text>
        <Button 
        title="Expo Router"
        onPress={() => router.back()}
        />

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})