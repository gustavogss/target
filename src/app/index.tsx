import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
        <Text>Olá, Expo Route!</Text>        
       <Button title="New Target" onPress={() => router.navigate('/target')}/>
       <Button title="Transaction" onPress={() => router.navigate('/transaction/123')}/>
        <Button title="InProgress" onPress={() => router.navigate('/in-progress/80')}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    }
})