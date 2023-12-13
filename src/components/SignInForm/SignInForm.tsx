import { Routes } from '@/constants/enums';
import { signInFormInterface } from '@/interfaces/formInterfaces';
import { signInFormSchema } from '@/utils/FormsSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Input from '../Input/Input';
import signIn from '@/utils/firebase/auth/signIn';
import { useState } from 'react';
import { Loader } from '../Loader/Loader';
import BasicButton from '../common/BasicButton/BasicButton';

const SignInForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<signInFormInterface>({
    mode: 'onChange',
    resolver: yupResolver(signInFormSchema),
  });

  const onSubmit = async (data: signInFormInterface) => {
    setIsLoading(true);

    const { error } = await signIn(data.email, data.password);

    if (!error) {
      router.push({ pathname: Routes.PLAYGROUND_PAGE });

      reset();
    }

    setIsLoading(false);
  };

  return (
    <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
      <Input<signInFormInterface>
        register={register}
        name="email"
        type="email"
        label="Email:"
        errors={errors.email?.message || ''}
      />

      <Input<signInFormInterface>
        register={register}
        name="password"
        type="password"
        label="Password:"
        security="true"
        errors={errors.password?.message || ''}
      />

      <BasicButton type="submit" disabled={!isValid}>
        {isLoading ? <Loader /> : 'Submit'}
      </BasicButton>
    </form>
  );
};

export default SignInForm;