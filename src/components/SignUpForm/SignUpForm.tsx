import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { signUpFormSchema } from '@/utils/FormsSchema';
import { signUpFormInterface } from '@/interfaces/formInterfaces';
import Input from '../Input/Input';
import { useRouter } from 'next/router';
import { Routes } from '@/constants/enums';
import signUp from '@/utils/firebase/auth/signUp';

const SignUpForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUpFormSchema),
  });

  const onSubmit = async (data: signUpFormInterface) => {
    console.log(data);
    const { result, error } = await signUp(data.email, data.password);
    console.log('result ', result, 'error ', error);

    if (!error) {
      router.push({ pathname: Routes.PLAYGROUND_PAGE });

      setTimeout(() => {
        reset();
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input<signUpFormInterface>
        register={register}
        name="email"
        type="email"
        label="Email"
        errors={errors.email?.message || ''}
      />

      <Input<signUpFormInterface>
        register={register}
        name="password"
        type="password"
        label="Password"
        security="true"
        errors={errors.password?.message || ''}
      />

      <Input<signUpFormInterface>
        register={register}
        name="passwordConfirmation"
        type="password"
        label="Password confirmation"
        security="true"
        errors={errors.passwordConfirmation?.message || ''}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
