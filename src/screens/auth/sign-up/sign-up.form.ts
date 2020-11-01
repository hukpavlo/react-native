import * as Yup from 'yup';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export type FormFields = {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
};

const defaultValues: FormFields = {
  email: '',
  password: '',
  lastName: '',
  firstName: '',
};

const resolver: Resolver<FormFields, object> = yupResolver(
  Yup.object().shape({
    firstName: Yup.string().required('First name is required!'),
    lastName: Yup.string().required('Last name is required!'),
    email: Yup.string().email('Invalid email').required('Email is required!'),
    password: Yup.string().required('Password is required!'),
  }),
);

export const useSignUpForm = () =>
  useForm<FormFields>({
    defaultValues,
    resolver,
  });
