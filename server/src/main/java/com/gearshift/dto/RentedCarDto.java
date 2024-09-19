package com.gearshift.dto;

import java.time.LocalDate;
import java.util.UUID;

public record RentedCarDto(UUID id, BasicClientDto client, LocalDate rentalStart, LocalDate rentalEnd) {
}
