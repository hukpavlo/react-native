import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { TextButtonProps } from './text-button.props';

export const TextButton: React.FC<TextButtonProps> = ({ title, disabled, titleStyle, containerStyle, ...props }) => {
  return (
    <TouchableOpacity disabled={disabled} activeOpacity={0.6} style={[styles.container, containerStyle]} {...props}>
      <Text style={[styles.title, titleStyle, disabled && styles.disablbed]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1fadf7',
  },
  disablbed: {
    color: 'grey',
  },
});
