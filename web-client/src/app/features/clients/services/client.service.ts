import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { injectInfiniteQuery, injectMutation, injectQuery, injectQueryClient } from '@ngneat/query';
import { Client, ClientDetails as ClientDetail } from '../dto/client';
import { PageResponse } from '../../../core/dto/page';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly PAGE_SIZE = 20;

  #http = inject(HttpClient);
  #infQuery = injectInfiniteQuery();
  #query = injectQuery();
  #mutation = injectMutation();
  #queryClient = injectQueryClient();

  getClients() {
    return this.#infQuery({
      queryKey: ['clients'],
      queryFn: ({ pageParam }) => this.fetchClients(pageParam),
      initialPageParam: 0,
      getPreviousPageParam: (page) =>
        page.pageNumber == 0 ? undefined : page.pageNumber - 1,
      getNextPageParam: (page) =>
        page.data.length == this.PAGE_SIZE ? page.pageNumber + 1 : undefined,
    });
  }

  getClient(id: string) {
    return this.#query({
      queryKey: [id],
      queryFn: () => this.#http.get<ClientDetail>(`clients/${id}`),
    });
  }

  addClient() {
    return this.#mutation({
      onSuccess: () => {
        this.#queryClient.invalidateQueries({ queryKey: ['clients'] });
      },
      mutationFn: (client: Client) =>
        this.#http.post<Client>(`clients`, client),
    });
  }

  private fetchClients(page: number) {
    const queryParams = new URLSearchParams();
    queryParams.set('page', page.toString());
    queryParams.set('pageSize', this.PAGE_SIZE.toString());

    return this.#http.get<PageResponse<Client>>(`clients?${queryParams.toString()}`);
  };

}