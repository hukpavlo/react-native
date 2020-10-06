import React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';

import { SignInProps } from './sign-in.props';
import { useSignInForm } from './sign-in.form';
import { FormInput, Button } from '../../../components';

export const SignIn: React.FC<SignInProps> = () => {
  const { handleSubmit, errors, control } = useSignInForm();

  const onSubmit = () => {
    console.log('---------------');
    console.log('Sign in');
    console.log('---------------');
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

        <Button containerStyle={styles.button} title="Forgot Password?" onPress={handleSubmit(onSubmit)} />
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
