import { Component, inject } from '@angular/core';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { InfiniteData, QueryObserverResult } from '@ngneat/query';
import { Car, CarDetail, RentStatus } from '../../dtos/car';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../../clients/services/client.service';
import {
  NewRentalEvent,
  NewRentalFormComponent,
} from './new-rental-form/new-rental-form.component';
import { PageResponse } from '../../../../core/dto/page';
import { Client } from '../../../clients/dto/client';
import { RentService } from '../../services/rent.service';

@Component({
  selector: 'app-cars-detail',
  standalone: true,
  imports: [CommonModule, NewRentalFormComponent],
  templateUrl: './cars-detail.component.html',
  styleUrl: './cars-detail.component.scss',
})
export class CarDetailComponent {
  constructor(private route: ActivatedRoute) {
    this.carId = this.route.snapshot.params['id'];
    this.car = inject(CarService).getCar(this.carId).result$;
  }

  carId: string;
  car: Observable<QueryObserverResult<CarDetail, Error>>;
  clients = inject(ClientService).getClients().result$;
  returnCarMutation = inject(RentService).returnCar();
  createRentalMutation = inject(RentService).rentCar();

  toList(data: InfiniteData<PageResponse<Client>, unknown>): Client[] {
    return data.pages.flatMap((response) => response.data);
  }

  createRental(event: NewRentalEvent) {
    return this.createRentalMutation.mutate({ ...event, carId: this.carId });
  }

  rented(car: Car): boolean {
    return car.rentStatus === RentStatus.RENTED;
  }

  returnCar(carId: string) {
    return this.returnCarMutation.mutate(carId);
  }
}
