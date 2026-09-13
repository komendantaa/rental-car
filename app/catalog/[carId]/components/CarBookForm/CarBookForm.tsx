'use client';

import { Form, Formik, type FormikHelpers } from 'formik';
import { useId, useState } from 'react';
import toast from 'react-hot-toast';

import Button from '@/components/Button';
import FormField from '@/components/FormField';
import { bookCar } from '@/lib/api';
import { parseApiErrorToForm } from '@/utils/parseError';
import { BookCarRequestBody, Car } from '@/types/car';
import * as form from './form';

import css from './CarBookForm.module.css';

type Props = Pick<Car, 'id'>;

const CarBookForm = ({ id }: Props) => {
  const [isLoading, setLoading] = useState(false);
  const fieldId = useId();

  const handleSubmit = async (values: BookCarRequestBody, actions: FormikHelpers<BookCarRequestBody>) => {
    try {
      setLoading(true);
      const result = await bookCar(id, values);

      if (result) {
        toast.success('Car booked successfully!', { duration: 5000 });
        actions.resetForm();
      }
    } catch (e) {
      const { parsed, errors, touched, message } = parseApiErrorToForm<BookCarRequestBody>(e);

      toast.error(message, { duration: 5000 });

      if (parsed) {
        actions.setErrors(errors);
        actions.setTouched(touched, false);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css.container}>
      <p className={css.formTitle}>Book your car now</p>
      <p className={css.formDescription}>Stay connected! We are always ready to help you.</p>

      <Formik initialValues={form.initialValues} validationSchema={form.schema} onSubmit={handleSubmit}>
        <Form className={css.form} noValidate>
          <FormField id={`${fieldId}-name`} name="name" label="Name" required />

          <FormField id={`${fieldId}-email`} name="email" type="email" label="Email" required />

          <FormField id={`${fieldId}-comment`} name="comment" label="Comment" required as="textarea" rows={3} />

          <Button type="submit" isLoading={isLoading} className={css.submitButton}>
            Send
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default CarBookForm;
