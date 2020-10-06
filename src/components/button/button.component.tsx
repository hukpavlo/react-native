import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { ButtonProps } from './button.props';

export const Button: React.FC<ButtonProps> = ({
  title,
  titleStyle,
  containerStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, containerStyle]}
      {...props}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
    backgroundColor: 'darkgrey',
    borderWidth: 2,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
});
