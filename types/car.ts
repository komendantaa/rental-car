export interface Location {
  country: string;
  city: string;
  address: string;
}

export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engine: string;
  features: string[];
  rentalPrice: string;
  rentalCompany: string;
  location: Location;
  rentalConditions: string[];
  mileage: number;
  stockNumber: number;
}

export interface CarsPaginated {
  cars: Car[];
  page: number;
  totalCars: number;
  totalPages: number;
}

export interface CarsPaginatedQueryParams {
  brand?: string;
  price?: number;
  minMileage?: number;
  maxMileage?: number;
  page?: number;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface CarsPaginatedFilters {
  brands: string[];
  price: PriceRange;
}

export interface BookCarRequestBody {
  name: string;
  email: string;
  comment: string;
}
