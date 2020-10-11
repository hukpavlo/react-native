import React from 'react';
import { Auth } from 'aws-amplify';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';

import { FormInput, Button } from '../../../components';
import { ConfirmSignUpProps } from './confirm-sign-up.props';
import { useConfirmSignUpForm, FormFields } from './confirm-sign-up.form';

export const ConfirmSignUp: React.FC<ConfirmSignUpProps> = () => {
  const { handleSubmit, errors, control } = useConfirmSignUpForm();

  const onSubmit = (fields: FormFields) => {
    console.log('---------------');
    console.log('Confirm sign up');
    console.log('---------------');
    Auth.confirmSignUp(fields.email, fields.confirmationCode, { forceAliasCreation: true });
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.text}>Confirm Sign up</Text>

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

        <Button containerStyle={styles.button} title="Resend code" onPress={() => {}} />
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
  button: {
    marginBottom: 10,
  },
});
