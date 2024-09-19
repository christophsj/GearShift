package com.gearshift.service;

import com.gearshift.entity.Client;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.UUID;

public interface IClientService {

    /**
     * Get a client by its id
     *
     * @param id the id of the client
     */
    Client getById(UUID id);

    /**
     * Save a client
     *
     * @param client the client to save
     */
    Client save(Client client);

    /***
     * Get a page of clients
     * @param pageRequest the page request
     * @return the page of cars
     */
    Page<Client> getPage(Pageable pageRequest);

    /**
     * Delete a client by its id
     *
     * @param id the id of the client
     */
    void delete(UUID id);
}
