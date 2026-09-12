import { SelectOption } from '@/types/select';
import { PriceRange } from '@/types/car';

export const buildPriceSelectOptions = (price?: PriceRange): SelectOption[] => {
  if (!price) {
    return [];
  }

  return Array.from({ length: Math.round((price.max - price.min) / 10) + 1 }, (_, i) => {
    const value = price.min + i * 10;
    return { value: String(value), label: String(value), placeholder: `To $${value}` };
  });
};
