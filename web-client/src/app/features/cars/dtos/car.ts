import { RentedCar } from '../../../core/dto/rental';

export interface Car {
  id: string;
  kilometers: number;
  registeredAt: Date;
  model: CarModel;
}

export interface CarDetail {
  id: string;
  kilometers: number;
  registeredAt: Date;
  model: CarModel;
  rentals: RentedCar[];
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