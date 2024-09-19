package com.gearshift.dto;

import java.time.LocalDate;
import java.util.UUID;

public record CarDto(UUID id, int kilometers, LocalDate registeredAt, CarModelDto model) {
}
