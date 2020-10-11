import React from 'react';
import { Auth } from 'aws-amplify';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';

import { ScreenName } from '../../../constants';
import { FormInput, Button } from '../../../components';
import { ConfirmForgotPasswordProps } from './confirm-forgot-password.props';
import { useConfirmForgotPasswordForm, FormFields } from './confirm-forgot-password.form';

export const ConfirmForgotPassword: React.FC<ConfirmForgotPasswordProps> = ({ navigation }) => {
  const { handleSubmit, errors, control } = useConfirmForgotPasswordForm();

  const onSubmit = async (fields: FormFields) => {
    console.log('---------------');
    console.log('Confirm forgot password');
    console.log('---------------');
    await Auth.forgotPasswordSubmit(fields.email, fields.confirmationCode, fields.password);
    navigation.navigate(ScreenName.SIGN_IN);
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
