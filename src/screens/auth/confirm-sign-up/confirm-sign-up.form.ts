import * as Yup from 'yup';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type FormFields = {
  confirmationCode: string;
};

const defaultValues: FormFields = {
  confirmationCode: '',
};

const resolver: Resolver<FormFields, object> = yupResolver(
  Yup.object().shape({
    confirmationCode: Yup.string()
      .required('Confirmation code is required!')
      .matches(/^\d{6}$/, 'Enter the 6-digit confirmation code, must be exactly 6 digit'),
  }),
);

export const useConfirmSignUpForm = () =>
  useForm<FormFields>({
    defaultValues,
    resolver,
  });
