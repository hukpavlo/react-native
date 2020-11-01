import { TouchableOpacityProps } from 'react-native';

export type TextButtonProps = {
  title: string;
  disabled?: boolean;
  titleStyle?: object;
  containerStyle?: object;
} & TouchableOpacityProps;
