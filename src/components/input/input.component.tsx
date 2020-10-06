import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { InputProps } from './input.props';

export const Input: React.FC<InputProps> = ({ style, ...props }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor="#a3a3a3"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});
