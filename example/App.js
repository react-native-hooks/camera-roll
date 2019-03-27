/* eslint-disable no-useless-concat, no-unused-vars */
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import useCameraRoll from '@rnhooks/camera-roll';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

function App() {
  const [photos, getPhotos, saveToCameraRoll, error] = useCameraRoll();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>@rnhooks/camera-roll</Text>
      <Button title="Get Photos" onPress={getPhotos} />
    </View>
  );
}

export default App;
