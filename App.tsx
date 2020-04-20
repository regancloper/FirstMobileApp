import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.topView}>
      <View style={{ backgroundColor: 'black', padding: 20, flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>#crushingit</Text>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: 'Optima-Regular',
    color: 'white',
    backgroundColor: 'red',
    fontSize: 40
  },
  topView: {
    flex: 1,
    backgroundColor: 'red',
    padding: 20
  }
});
