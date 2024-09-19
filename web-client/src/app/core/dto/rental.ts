import { BasicCar } from "../../features/cars/dtos/car";
import { BasicClient } from "../../features/clients/dto/client";


export interface RentedCar {
    id: string;
    client: BasicClient;
    car: BasicCar;
    rentalStart: Date;
    rentalEnd: Date;
  }