import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { DividerProps } from './divider.props';

export const Divider: React.FC<DividerProps> = () => {
  return (
    <View style={styles.divider}>
      <View style={styles.line} />
      <Text style={styles.OR}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 0.5,
    flexGrow: 1,
    backgroundColor: 'grey',
  },
  OR: {
    fontSize: 18,
    color: 'grey',
    fontWeight: '300',
    marginHorizontal: 10,
  },
});
