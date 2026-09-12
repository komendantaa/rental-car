import { SelectOption } from '@/types/select';

export const buildSelectOptions = (values?: string[]): SelectOption[] =>
  (values ?? []).map(value => ({ value, label: value }));
