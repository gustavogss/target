import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet, Button  } from 'react-native';

export default function InProgress() {
    const params = useLocalSearchParams<{id: string}>();
  return (
    <View style={styles.container}>
        <Text>ID: {params.id}</Text>
        <Button title='Voltar' onPress={()=> router.back()}/>
    </View>    
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }});