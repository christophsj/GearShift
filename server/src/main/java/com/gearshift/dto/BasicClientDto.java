package com.gearshift.dto;


import java.util.UUID;

public record BasicClientDto(
        UUID id,
        String name) {
}
