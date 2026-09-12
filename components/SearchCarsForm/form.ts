import * as Yup from 'yup';

import { SelectOption } from '@/types/select';

export interface SearchCarFormValues {
  brand: SelectOption | null;
  price: SelectOption | null;
  minMileage: string;
  maxMileage: string;
}

export const initialValues: SearchCarFormValues = {
  brand: null,
  price: null,
  minMileage: '',
  maxMileage: '',
};

const mileageSchema = Yup.string().matches(/^\d*$/, 'Mileage must be a positive number').max(9, 'Mileage is too large');

export const validationSchema = Yup.object({
  minMileage: mileageSchema,
  maxMileage: mileageSchema.test('max-greater-than-min', 'Max mileage must be greater than min', (value, context) => {
    const min = context.parent.minMileage;

    if (!value || !min) return true;

    return Number(value) > Number(min);
  }),
});
