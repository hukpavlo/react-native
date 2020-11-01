import React from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';

import { IntroProps } from './intro.props';
import { ScreenName } from '../../constants';
import { Button, TextButton } from '../../components';

export const Intro: React.FC<IntroProps> = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.logo}>
      <View style={styles.logoImage} />
      <Text style={styles.logoText}>logo</Text>
    </View>

    <View style={styles.intro} />

    <View style={styles.buttons}>
      <Button
        title="Sign Up"
        containerStyle={styles.signUpContainer}
        onPress={() => navigation.push(ScreenName.SIGN_UP)}
      />
      <TextButton
        title="Log In"
        containerStyle={styles.logInContainer}
        onPress={() => navigation.push(ScreenName.LOG_IN)}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 50,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 30,
    height: 30,
    marginRight: 10,
    backgroundColor: '#1fadf7',
  },
  logoText: {
    fontSize: 30,
  },
  intro: {
    width: '80%',
    height: 400,
    backgroundColor: '#1fadf7',
  },
  buttons: {
    width: '80%',
    alignItems: 'center',
  },
  signUpContainer: {
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: '#1fadf7',
    marginBottom: 5,
  },
  logInContainer: {
    padding: 10,
  },
});
