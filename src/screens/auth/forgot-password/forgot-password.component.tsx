import React from 'react';
import { Auth } from 'aws-amplify';
import { Text, View, StyleSheet, KeyboardAvoidingView, SafeAreaView } from 'react-native';

import { FormInput, TextButton } from '../../../components';
import { ForgotPasswordProps } from './forgot-password.props';
import { useForgotPasswordForm, FormFields } from './forgot-password.form';

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ navigation }) => {
  const { handleSubmit, errors, control } = useForgotPasswordForm();

  const onSubmit = (fields: FormFields) => {
    Auth.forgotPassword(fields.email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerButtons}>
        <TextButton title="Cancel" onPress={() => navigation.goBack()} />
        <TextButton disabled={true} title="Continue" onPress={handleSubmit(onSubmit)} />
      </View>

      <KeyboardAvoidingView behavior="height" style={styles.form}>
        <Text style={styles.title}>Forgot password</Text>
        <Text style={styles.subtitle}>We'll email you a code to reset your password</Text>

        <FormInput
          name="email"
          control={control}
          placeholder="Email"
          containerStyle={styles.input}
          error={errors.email?.message}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerButtons: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: '500',
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 15,
    color: 'gray',
    marginBottom: 15,
    fontWeight: '400',
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
