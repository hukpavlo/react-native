import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { InputProps } from './input.props';

export const Input: React.FC<InputProps> = ({ style, ...props }) => {
  return <TextInput style={[styles.input, style]} placeholderTextColor="#a3a3a3" {...props} />;
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 15,
    borderColor: 'grey',
    backgroundColor: 'white',
  },
});
