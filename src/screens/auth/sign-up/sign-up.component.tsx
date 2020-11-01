import React from 'react';
import { Auth } from 'aws-amplify';
import { Text, View, StyleSheet, KeyboardAvoidingView, SafeAreaView } from 'react-native';

import { SignUpProps } from './sign-up.props';
import { useSignUpForm, FormFields } from './sign-up.form';
import { FormInput, TextButton } from '../../../components';
import { AppleButton, GoogleButton, Divider } from '../components';

export const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const { handleSubmit, errors, control } = useSignUpForm();

  const onSubmit = (fields: FormFields) => {
    Auth.signUp({
      username: fields.email,
      password: fields.password,
      attributes: {
        'custom:userId': '213',
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerButtons}>
        <TextButton title="Cancel" onPress={() => navigation.goBack()} />
        <TextButton disabled={true} title="Continue" onPress={handleSubmit(onSubmit)} />
      </View>

      <KeyboardAvoidingView behavior="height" style={styles.form}>
        <Text style={styles.text}>Sign up</Text>
        <View style={styles.inputRow}>
          <FormInput
            name="firstName"
            control={control}
            placeholder="First name"
            containerStyle={[styles.input, styles.rowInput]}
            error={errors.firstName?.message}
          />
          <FormInput
            name="lastName"
            control={control}
            placeholder="Last name"
            containerStyle={[styles.input, styles.rowInput]}
            error={errors.lastName?.message}
          />
        </View>
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

        <Text style={styles.passwordRule}>Password should be at least 6 characters.</Text>

        <Divider />

        <GoogleButton />
        <AppleButton />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  headerButtons: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
    fontWeight: '500',
    alignSelf: 'flex-start',
  },
  form: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  inputRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    width: '49%',
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
  },
  passwordRule: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '300',
  },
});
