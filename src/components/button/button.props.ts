import { TouchableOpacityProps } from 'react-native';

export type ButtonProps = {
  title: string;
  titleStyle?: object;
  containerStyle?: object;
} & TouchableOpacityProps;
