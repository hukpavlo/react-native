import React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';

import { FormInput, Button } from '../../../components';
import { ConfirmForgotPasswordProps } from './confirm-forgot-password.props';
import { useConfirmForgotPasswordForm } from './confirm-forgot-password.form';

export const ConfirmForgotPassword: React.FC<ConfirmForgotPasswordProps> = () => {
  const { handleSubmit, errors, control } = useConfirmForgotPasswordForm();

  const onSubmit = () => {
    console.log('---------------');
    console.log('Confirm forgot password');
    console.log('---------------');
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.text}>Confirm forgot password</Text>

      <View style={styles.form}>
        <FormInput
          name="email"
          control={control}
          placeholder="Email"
          containerStyle={styles.input}
          error={errors.email?.message}
        />
        <FormInput
          control={control}
          name="confirmationCode"
          containerStyle={styles.input}
          placeholder="Confirmation code"
          error={errors.confirmationCode?.message}
        />
        <FormInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry={true}
          containerStyle={styles.input}
          error={errors.password?.message}
        />
        <FormInput
          control={control}
          name="confirmPassword"
          secureTextEntry={true}
          containerStyle={styles.input}
          placeholder="Confirm password"
          error={errors.confirmPassword?.message}
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
    textAlign: 'center',
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
