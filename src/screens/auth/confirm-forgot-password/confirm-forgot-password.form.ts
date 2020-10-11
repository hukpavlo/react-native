import * as Yup from 'yup';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export type FormFields = {
  email: string;
  password: string;
  confirmPassword: string;
  confirmationCode: string;
};

const defaultValues: FormFields = {
  email: '',
  password: '',
  confirmPassword: '',
  confirmationCode: '',
};

const resolver: Resolver<FormFields, object> = yupResolver(
  Yup.object().shape({
    confirmationCode: Yup.string()
      .required('Confirmation code is required!')
      .matches(/^\d{6}$/, 'Enter the 6-digit confirmation code, must be exactly 6 digit'),
    email: Yup.string().email('Invalid email').required('Email is required!'),
    password: Yup.string().required('Password is required!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords are not the same!')
      .required('Password confirmation is required!'),
  }),
);

export const useConfirmForgotPasswordForm = () =>
  useForm<FormFields>({
    defaultValues,
    resolver,
  });
