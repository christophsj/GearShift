import { BasicCar } from "../../features/cars/dtos/car";
import { BasicClient } from "../../features/clients/dto/client";


export interface RentedCar {
    id: string;
    start: Date;
    end: Date;
    client: BasicClient;
    car: BasicCar;
    rentalStart: Date;
    rentalEnd: Date;
  }