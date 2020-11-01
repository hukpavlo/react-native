import React from 'react';
import { Auth } from 'aws-amplify';
import { Text, View, StyleSheet, KeyboardAvoidingView, SafeAreaView } from 'react-native';

import { LogInProps } from './log-in.props';
import { ScreenName } from '../../../constants';
import { useLogInForm, FormFields } from './log-in.form';
import { FormInput, TextButton } from '../../../components';
import { AppleButton, GoogleButton, Divider } from '../components';

export const LogIn: React.FC<LogInProps> = ({ navigation }) => {
  const { handleSubmit, errors, control } = useLogInForm();

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
        <Text style={styles.text}>Log in</Text>

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

        <TextButton title="Forgot your password?" onPress={() => navigation.push(ScreenName.FORGOT_PASSWORD)} />

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
  input: {
    width: '100%',
    marginBottom: 10,
  },
});
