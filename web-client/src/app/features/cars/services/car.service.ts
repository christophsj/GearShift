import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { injectInfiniteQuery, injectMutation, injectQuery, injectQueryClient } from '@ngneat/query';
import { Car, CarDetail, CarModel, CarModelQuery, CreateCar } from '../dtos/car';
import { tap } from 'rxjs';
import { PageResponse } from '../../../core/dto/page';



@Injectable({
  providedIn: 'root',
})
export class CarService {
  private readonly PAGE_SIZE = 20;

  #http = inject(HttpClient);
  #infQuery = injectInfiniteQuery();
  #query = injectQuery();
  #mutation = injectMutation();
  #queryClient = injectQueryClient();

  getCars() {
    return this.#infQuery({
      queryKey: ['cars'],
      queryFn: ({ pageParam }) => this.fetchCars(pageParam),
      initialPageParam: 0,
      getPreviousPageParam: (page) =>
        page.pageNumber == 0 ? undefined : page.pageNumber - 1,
      getNextPageParam: (page) =>
        page.data.length == this.PAGE_SIZE ? page.pageNumber + 1 : undefined,
    });
  }

  getCar(id: string) {
    return this.#query({
      queryKey: [id],
      queryFn: () => this.#http.get<CarDetail>(`cars/${id}`),
    });
  }

  getModels(query: CarModelQuery) {
    return this.#query({
      queryKey: ['models'],
      queryFn: () => this.fetchModels(query),
    })
  }

  addCar() {
    return this.#mutation({
      onSuccess: () => {
        this.#queryClient.invalidateQueries({ queryKey: ['models'] });
        this.#queryClient.invalidateQueries({ queryKey: ['cars'] });
      },
      mutationFn: (car: Car) =>
        this.#http.post<Car>(`cars`, car),
    });
  }

  private fetchModels(query: CarModelQuery) {
    const queryParams = new URLSearchParams();
    
    if (query.make) queryParams.set('make', query.make);
    if (query.model) queryParams.set('model', query.model);
    if (query.year) queryParams.set('year', query.year);

    return this.#http.get<CarModel[]>(`cars/models?${queryParams.toString()}`);
  }

  private fetchCars(page: number) {
    const queryParams = new URLSearchParams();
    queryParams.set('page', page.toString());
    queryParams.set('pageSize', this.PAGE_SIZE.toString());

    return this.#http.get<PageResponse<Car>>(`cars?${queryParams.toString()}`);
  };
}
