import * as Yup from 'yup';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export type FormFields = {
  email: string;
};

const defaultValues: FormFields = {
  email: '',
};

const resolver: Resolver<FormFields, object> = yupResolver(
  Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required!'),
  }),
);

export const useForgotPasswordForm = () =>
  useForm<FormFields>({
    defaultValues,
    resolver,
  });
