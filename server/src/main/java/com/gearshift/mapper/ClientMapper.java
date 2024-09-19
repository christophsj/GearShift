package com.gearshift.mapper;

import com.gearshift.dto.ClientDetailDto;
import com.gearshift.dto.ClientDto;
import com.gearshift.dto.CreateClientDto;
import com.gearshift.entity.Client;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ClientMapper {

    ClientDto toDto(Client car);

    Client toCreateEntity(CreateClientDto createClientDto);

    Client toEntity(ClientDto clientDto);

    ClientDetailDto toDetailDto(Client client);
}