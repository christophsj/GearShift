package com.gearshift.service.impl;

import com.gearshift.entity.Client;
import com.gearshift.exception.NotFoundException;
import com.gearshift.repository.ClientRepository;
import com.gearshift.service.IClientService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class SimpleClientService implements IClientService {

    private final ClientRepository clientRepository;

    public SimpleClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }


    @Override
    public Client getById(UUID id) {
        return clientRepository.findById(id).orElseThrow(NotFoundException::new);
    }

    @Override
    public Client save(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public Page<Client> getPage(Pageable pageRequest) {
        return clientRepository.findAll(pageRequest);
    }

    @Override
    public void delete(UUID id) {
        clientRepository.deleteById(id);
    }
}
