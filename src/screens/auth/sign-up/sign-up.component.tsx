import React from 'react';
import { Auth } from 'aws-amplify';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';

import { SignUpProps } from './sign-up.props';
import { ScreenName } from '../../../constants';
import { FormInput, Button } from '../../../components';
import { useSignUpForm, FormFields } from './sign-up.form';

export const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const { handleSubmit, errors, control } = useSignUpForm();

  const onSubmit = (fields: FormFields) => {
    Auth.signUp({
      username: fields.email,
      password: fields.password,
      attributes: {
        email: fields.email,
        name: `${fields.firstName} ${fields.lastName}`,
      },
    });
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Text style={styles.text}>Sign up</Text>

      <View style={styles.form}>
        <FormInput
          name="firstName"
          control={control}
          placeholder="First name"
          containerStyle={styles.input}
          error={errors.firstName?.message}
        />
        <FormInput
          name="lastName"
          control={control}
          placeholder="Last name"
          containerStyle={styles.input}
          error={errors.lastName?.message}
        />
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
        <FormInput
          control={control}
          name="confirmPassword"
          secureTextEntry={true}
          containerStyle={styles.input}
          placeholder="Confirm password"
          error={errors.confirmPassword?.message}
        />

        <Button
          title="Sign in"
          containerStyle={styles.button}
          onPress={() => navigation.navigate(ScreenName.SIGN_IN)}
        />
        <Button title="Sign up" onPress={handleSubmit(onSubmit)} />
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
