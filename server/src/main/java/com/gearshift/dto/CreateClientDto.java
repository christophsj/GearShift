package com.gearshift.dto;

public record CreateClientDto(String name, String email, String phone, AddressDto address) {
}
