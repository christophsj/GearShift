import { RentedCar } from '../../../core/dto/rental';

export enum RentStatus {
  RENTED = 'RENTED',
  AVAILABLE = 'RETURNED',
}

export interface Car {
  id: string;
  kilometers: number;
  registeredAt: Date;
  model: CarModel;
  rentStatus: RentStatus;
}

export interface CarDetail {
  id: string;
  kilometers: number;
  registeredAt: Date;
  model: CarModel;
  rentals: RentedCar[];
  rentStatus: RentStatus;
}

export interface CreateCar {
  kilometers: number;
  registeredAt: Date;
  model: string | CarModel;
}

export interface CarModel {
  id?: string;
  make: string;
  model: string;
  year: string;
}

export interface CarModelQuery {
  make?: string;
  model?: string;
  year?: string;
}


export interface BasicCar {
  id: string;
  model: CarModel;
}

export interface CreateRental {
  rentalStart: string;
  rentalEnd: string;
  clientId: string;
  carId: string;
}