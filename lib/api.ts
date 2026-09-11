import axios, { AxiosError } from 'axios';

import { ApiError, ApiSuccess } from '@/types/api';
import { BookCarRequestBody, Car, CarsPaginated, CarsPaginatedFilters, CarsPaginatedQueryParams } from '@/types/car';

const api = axios.create({
  baseURL: 'https://car-rental-api.goit.study',
});

export const getApiError = (e: unknown): ApiError | null => {
  if (!axios.isAxiosError(e)) return null;
  return (e as AxiosError<ApiError>).response?.data ?? null;
};

export const getCars = async (params?: CarsPaginatedQueryParams): Promise<CarsPaginated> => {
  const { data } = await api.get<CarsPaginated>('cars', { params: { ...params, perPage: 12 } });
  return data;
};

export const getCarsFilters = async (): Promise<CarsPaginatedFilters> => {
  const { data } = await api.get<CarsPaginatedFilters>('cars/filters');
  return data;
};

export const getCarById = async (id: string): Promise<Car> => {
  const { data } = await api.get<Car>(`cars/${id}`);
  return data;
};

export const bookCar = async (id: string, body: BookCarRequestBody): Promise<ApiSuccess> => {
  const { data } = await api.post<ApiSuccess>(`cars/${id}/booking-requests`, body);
  return data;
};
