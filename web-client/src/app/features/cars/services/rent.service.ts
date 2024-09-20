import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { injectMutation, injectQuery, injectQueryClient } from '@ngneat/query';
import { CarDetail, CreateRental } from '../dtos/car';
import { RentOverview } from '../../../core/dto/rental';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  #http = inject(HttpClient);
  #mutation = injectMutation();
  #query = injectQuery();
  #queryClient = injectQueryClient();

  rentCar() {
    return this.#mutation({
      onSuccess: () => {
        this.#queryClient.invalidateQueries({ queryKey: ['car'] });
      },
      mutationFn: (rental: CreateRental) =>
        this.#http.post<CarDetail>('rent', rental),
    });
  }

  returnCar() {
    return this.#mutation({
      onSuccess: () => {
        this.#queryClient.invalidateQueries({ queryKey: ['car'] });
      },
      mutationFn: (carId: string) =>
        this.#http.post<CarDetail>('rent/return', {'carId': carId}),
    });
  }


  getRentOverview() {
    return this.#query({
      queryKey: ['overview'],
      queryFn: () => this.#http.get<RentOverview>('rent'),
    });
  }
}
