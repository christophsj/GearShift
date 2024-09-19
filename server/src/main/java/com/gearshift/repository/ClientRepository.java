package com.gearshift.repository;

import com.gearshift.entity.Client;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.Repository;

import java.util.Optional;
import java.util.UUID;

public interface ClientRepository extends PagingAndSortingRepository<Client, UUID> {

    Optional<Client> findById(UUID id);

    Client save(Client entity);

    void deleteById(UUID id);
}
