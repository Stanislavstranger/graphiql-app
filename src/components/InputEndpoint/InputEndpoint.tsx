/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import Input from '../Input/Input';
import { endpointFormType } from '@/interfaces/formInterfaces';
import { INITIAL_ENDPOINT, URL_REGEXP } from '@/constants/stringConstants';
import { FC, InputHTMLAttributes, useEffect, useState } from 'react';
import useTranslation from '@/localization/useTranslation';
import BasicButton from '../common/BasicButton/BasicButton';
import cn from 'classnames';
import styles from './InputEndpoint.module.scss';

type InputEndpointType = {
  getEndpoint: (endpoint: string | null) => void;
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const InputEndpoint: FC<InputEndpointType> = ({ getEndpoint, error }) => {
  const storedEndpoint = localStorage.getItem('endpoint') || INITIAL_ENDPOINT;
  const [endpoint, setEndpoint] = useState<string | null>(storedEndpoint);
  const { register, handleSubmit } = useForm<endpointFormType>();

  const t = useTranslation();

  useEffect(() => {
    getEndpoint(storedEndpoint);
  }, [getEndpoint, storedEndpoint]);

  const handleChangeEnpoint = (data: endpointFormType): void => {
    const newEndpoint = data.endpoint;
    const regexp = new RegExp(URL_REGEXP);

    if (regexp.test(newEndpoint)) {
      setEndpoint(newEndpoint);
      localStorage.setItem('endpoint', newEndpoint);
      getEndpoint(newEndpoint);
    } else {
      setEndpoint(null);
      localStorage.removeItem('endpoint');
      getEndpoint(null);
    }
  };

  return (
    <div className={styles.inputEndpoint_container}>
      <form
        action="submit"
        onSubmit={handleSubmit(handleChangeEnpoint)}
        className={styles.form_container}
      >
        <Input<endpointFormType>
          className={styles.input}
          register={register}
          name="endpoint"
          type="text"
          defaultValue={endpoint ? endpoint : ''}
          containerClassName={styles.input_container}
          fieldClassName={styles.input_field}
          focus={true}
        />
        <BasicButton className={styles.button}>{t['Change endpoint']}</BasicButton>
      </form>

      <p>
        <span>{t['Endpoint']}: </span>
        <span
          className={cn(
            styles.endpoint_text,
            endpoint && error ? styles.valid_color : styles.invalid_color
          )}
        >
          {endpoint ? endpoint : t['invalid endpoint']}
        </span>
      </p>
    </div>
  );
};

export default InputEndpoint;
