import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Can from './Can'

export default function App() {
  const post = { read: true }
  return (
    <View style={styles.container}>   
      <Text>Open up App.js to start working on your app!</Text>
      <Can I="read" a="Line">
        <Text>I can read it!</Text>
      </Can>
      <Can I="read" a="Text">
        <Text>I can't read it!</Text>
      </Can>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
