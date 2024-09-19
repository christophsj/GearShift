import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { injectMutation, injectQueryClient } from '@ngneat/query';
import { CarDetail, CreateRental } from '../dtos/car';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  #http = inject(HttpClient);
  #mutation = injectMutation();
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
        this.#http.patch<CarDetail>('rent/return', {'carId': carId}),
    });
  }
}
