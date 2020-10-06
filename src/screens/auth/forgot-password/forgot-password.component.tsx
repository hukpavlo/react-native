import React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';

import { FormInput, Button } from '../../../components';
import { ForgotPasswordProps } from './forgot-password.props';
import { useForgotPasswordForm } from './forgot-password.form';

export const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const { handleSubmit, errors, control } = useForgotPasswordForm();

  const onSubmit = () => {
    console.log('---------------');
    console.log('Forgot password');
    console.log('---------------');
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.text}>Forgot password</Text>

      <View style={styles.form}>
        <FormInput
          name="email"
          control={control}
          placeholder="Email"
          containerStyle={styles.input}
          error={errors.email?.message}
        />

        <Button title="Confirm" onPress={handleSubmit(onSubmit)} />
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
});
