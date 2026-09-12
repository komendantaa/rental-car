import type { FormikErrors, FormikTouched } from 'formik';

import { getApiError } from '@/lib/api';

interface ParsedFormError<T> {
  parsed: boolean;
  errors: FormikErrors<T>;
  touched: FormikTouched<T>;
  message: string;
}

export const parseApiErrorToForm = <T>(e: unknown): ParsedFormError<T> => {
  const apiError = getApiError(e);
  const body = apiError?.validation?.body;
  const keys = body?.keys ?? [];

  return {
    parsed: !!keys.length,
    errors: Object.fromEntries(keys.map(key => [key, body!.message])) as FormikErrors<T>,
    touched: Object.fromEntries(keys.map(key => [key, true])) as FormikTouched<T>,
    message: apiError?.message ?? 'Something went wrong. Please try again.',
  };
};
