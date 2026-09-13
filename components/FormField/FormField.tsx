import clsx from 'clsx';
import { Field, getIn, useFormikContext } from 'formik';
import { MdErrorOutline } from 'react-icons/md';
import { InputHTMLAttributes } from 'react';

import css from './FormField.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  as?: string;
  rows?: number;
  error?: string;
  hasError?: boolean;
}

const FormField = ({ id, name, label, as, error, hasError, required, ...rest }: Props) => {
  const { errors, touched } = useFormikContext();

  const fieldError = error ?? getIn(errors, name);
  const showError = hasError ?? Boolean(getIn(touched, name) && fieldError);

  return (
    <div className={css.fieldWrapper}>
      <div className={clsx(css.inputContainer, { [css.errorInput]: showError })}>
        <Field
          id={id}
          name={name}
          as={as}
          required={required}
          className={clsx(css.input, { [css.textarea]: as === 'textarea' })}
          placeholder=" "
          {...rest}
        />

        <label htmlFor={id} className={css.label}>
          {required ? `${label}*` : label}
        </label>

        {showError && <MdErrorOutline className={css.errorIcon} aria-hidden="true" />}
      </div>

      {showError && <span className={css.errorText}>{fieldError}</span>}
    </div>
  );
};

export default FormField;
