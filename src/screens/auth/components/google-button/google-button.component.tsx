import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

import { GoogleButtonProps } from './google-button.props';

export const GoogleButton: React.FC<GoogleButtonProps> = () => {
  return (
    <TouchableOpacity style={styles.socialButton} activeOpacity={0.4}>
      <Image source={require('../../../../assets/google-logo.png')} style={styles.socialIcon} />
      <Text style={styles.socialText}>Continue with Google</Text>
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
