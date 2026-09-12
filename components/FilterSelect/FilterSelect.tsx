import Select, { components, SingleValueProps } from 'react-select';

import FilterField from '@/components/FilterField';
import { SelectOption } from '@/types/select';

import './FilterSelect.module.css';

type Props = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: SelectOption | null;
  options: SelectOption[];
  onChange: (value: SelectOption | null) => void;
};

const SingleValue = (props: SingleValueProps<SelectOption>) => (
  <components.SingleValue {...props}>{props.data.placeholder || props.data.label}</components.SingleValue>
);

const FilterSelect = ({ id, name, label, placeholder, value, options, onChange }: Props) => {
  return (
    <FilterField label={label} htmlFor={id}>
      <Select
        components={{ SingleValue }}
        classNamePrefix="select"
        instanceId={id}
        name={name}
        value={value}
        options={options}
        placeholder={placeholder}
        isSearchable={false}
        onChange={option => onChange(option as SelectOption | null)}
      />
    </FilterField>
  );
};

export default FilterSelect;
