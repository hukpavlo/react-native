import React from 'react';
import { Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { ScreenName } from '../../constants';

import { HomeProps } from './home.props';

export const Home: React.FC<HomeProps> = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate(ScreenName.SIGN_IN)}>
      <Text style={styles.text}>Sign in</Text>
    </Pressable>
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate(ScreenName.SIGN_UP)}>
      <Text style={styles.text}>Sign up</Text>
    </Pressable>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  button: {
    minWidth: 300,
    borderWidth: 5,
    borderRadius: 10,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomColor: 'black',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 50,
  },
});
