import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

import { HomeProps } from './home.props';

export const Home: React.FC<HomeProps> = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Home</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  text: {
    fontSize: 50,
  },
});
