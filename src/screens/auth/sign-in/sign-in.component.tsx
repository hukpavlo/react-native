import React from 'react';
import { Auth } from 'aws-amplify';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';

import { SignInProps } from './sign-in.props';
import { ScreenName } from '../../../constants';
import { FormInput, Button } from '../../../components';
import { FormFields, useSignInForm } from './sign-in.form';

export const SignIn: React.FC<SignInProps> = ({ navigation }) => {
  const { handleSubmit, errors, control } = useSignInForm();

  const onSubmit = async (fields: FormFields) => {
    console.log('---------------');
    console.log('Sign in');
    console.log('---------------');
    await Auth.signIn(fields.email, fields.password);
    navigation.navigate(ScreenName.HOME);
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.text}>Sign in</Text>

      <View style={styles.form}>
        <FormInput
          name="email"
          control={control}
          placeholder="Email"
          containerStyle={styles.input}
          error={errors.email?.message}
        />
        <FormInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry={true}
          containerStyle={styles.input}
          error={errors.password?.message}
        />

        <Button
          containerStyle={styles.button}
          title="Forgot Password?"
          onPress={() => navigation.navigate(ScreenName.FORGOT_PASSWORD)}
        />
        <Button
          containerStyle={styles.button}
          title="Sign up"
          onPress={() => navigation.navigate(ScreenName.SIGN_UP)}
        />
        <Button title="Sign in" onPress={handleSubmit(onSubmit)} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
  },
  form: {
    width: '80%',
    marginTop: 10,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    maxWidth: 300,
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
  },
});
