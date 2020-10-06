import { InputProps } from '../input/input.props';

export type FormInputProps = {
  control: any;
  name: string;
  containerStyle?: object;
  error: string | undefined;
} & InputProps;
