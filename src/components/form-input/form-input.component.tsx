import React from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';

import { Input } from '../input';
import { FormInputProps } from './form-input.props';

export const FormInput: React.FC<FormInputProps> = ({ name, error, style, control, containerStyle, ...props }) => (
  <View style={containerStyle}>
    <Controller
      name={name}
      control={control}
      render={({ onChange, onBlur, value }) => (
        <Input style={style} value={value} onBlur={onBlur} onChangeText={onChange} {...props} />
      )}
    />
    {!!error && <Text style={styles.error}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginTop: 5,
  },
});
