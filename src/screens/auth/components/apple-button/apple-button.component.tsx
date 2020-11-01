import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

import { AppleButtonProps } from './apple-button.props';

export const AppleButton: React.FC<AppleButtonProps> = () => {
  return (
    <TouchableOpacity style={styles.socialButton} activeOpacity={0.4}>
      <Image source={require('../../../../assets/apple-logo.png')} style={styles.socialIcon} />
      <Text style={styles.socialText}>Continue with Apple</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    padding: 11,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  socialText: {
    fontWeight: '500',
    fontSize: 18,
  },
});
