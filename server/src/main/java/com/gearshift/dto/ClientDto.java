package com.gearshift.dto;


public record ClientDto(
        String id,
        String name,
        String email,
        String phone,
        AddressDto address) {
}
