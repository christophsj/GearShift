package com.gearshift.endpoint;

import com.gearshift.dto.ClientDetailDto;
import com.gearshift.dto.ClientDto;
import com.gearshift.dto.CreateClientDto;
import com.gearshift.dto.PageDto;
import com.gearshift.entity.Client;
import com.gearshift.mapper.ClientMapper;
import com.gearshift.service.IClientService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/clients")
@CrossOrigin(origins = "*")
public class ClientEndpoint {

    private final IClientService clientService;
    private final ClientMapper clientMapper;

    public ClientEndpoint(IClientService clientService, ClientMapper clientMapper) {
        this.clientService = clientService;
        this.clientMapper = clientMapper;
    }


    @GetMapping("{id}")
    public ClientDetailDto getById(@PathVariable UUID id) {
        log.info("Getting client by id: {}", id);
        return clientMapper.toDetailDto(clientService.getById(id));
    }

    @PostMapping
    public ClientDto saveClient(@RequestBody CreateClientDto clientDto) {
        log.info("Saving client: {}", clientDto);
        final Client client = clientMapper.toCreateEntity(clientDto);
        return clientMapper.toDto(clientService.save(client));
    }

    @GetMapping
    public PageDto<ClientDto> getPage(Pageable pageRequest) {
        log.info("Getting clients page: {}", pageRequest);
        return new PageDto<>(clientService.getPage(pageRequest)
                .stream()
                .map(clientMapper::toDto)
                .toList(), pageRequest.getPageNumber());
    }

    @PutMapping
    public ClientDto updateClient(@RequestBody ClientDto clientDto) {
        log.info("Updating client: {}", clientDto);
        final Client client = clientMapper.toEntity(clientDto);
        return clientMapper.toDto(clientService.save(client));
    }

    @DeleteMapping("{id}")
    public void deleteClient(@PathVariable UUID id) {
        log.info("Deleting client by id: {}", id);
        clientService.delete(id);
    }

}