import { ReactNode } from 'react';

import css from './FilterField.module.css';

interface Props {
  label: string;
  htmlFor: string;
  children: ReactNode;
}

const FilterField = ({ label, htmlFor, children }: Props) => {
  return (
    <div className={css.formGroup}>
      <label htmlFor={htmlFor}>{label}</label>

      {children}
    </div>
  );
};

export default FilterField;
