import * as Yup from 'yup';
import { BookCarRequestBody } from '@/types/car';

export const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name is too long')
    .required('Please enter your name.'),

  email: Yup.string()
    .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm, 'Email invalid')
    .required('Please enter your email.'),

  comment: Yup.string()
    .min(2, 'Comment must be at least 2 characters')
    .max(500, 'Comment is too long')
    .required('Please enter your comment.'),
});

export const initialValues: BookCarRequestBody = {
  name: '',
  email: '',
  comment: '',
};
