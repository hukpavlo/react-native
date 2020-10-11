import React from 'react';
import { Auth } from 'aws-amplify';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';

import { ScreenName } from '../../../constants';
import { FormInput, Button } from '../../../components';
import { ForgotPasswordProps } from './forgot-password.props';
import { useForgotPasswordForm, FormFields } from './forgot-password.form';

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ navigation }) => {
  const { handleSubmit, errors, control } = useForgotPasswordForm();

  const onSubmit = async (fields: FormFields) => {
    console.log('---------------');
    console.log('Forgot password');
    console.log('---------------');
    await Auth.forgotPassword(fields.email);
    navigation.navigate(ScreenName.CONFIRM_FORGOT_PASSWORD);
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

        <Button containerStyle={styles.button} title="Confirm" onPress={handleSubmit(onSubmit)} />
        <Button title="Go back" onPress={() => navigation.navigate(ScreenName.SIGN_IN)} />
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
