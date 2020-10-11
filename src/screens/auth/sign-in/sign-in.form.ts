import * as Yup from 'yup';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export type FormFields = {
  email: string;
  password: string;
};

const defaultValues: FormFields = {
  email: '',
  password: '',
};

const resolver: Resolver<FormFields, object> = yupResolver(
  Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required!'),
    password: Yup.string().required('Password is required!'),
  }),
);

export const useSignInForm = () =>
  useForm<FormFields>({
    defaultValues,
    resolver,
  });
