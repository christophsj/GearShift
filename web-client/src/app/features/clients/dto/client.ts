import { BasicCar } from '../../../features/cars/dtos/car';

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    country: string;
    zip: string;
  };
}

export interface ClientDetails {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    country: string;
    zip: string;
  };
  rentals: {
    car: BasicCar,
    rentalStart: Date,
    rentalEnd: Date
  }[]
}

export interface BasicClient {
  id: string;
  name: string;
}
