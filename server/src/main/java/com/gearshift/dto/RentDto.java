package com.gearshift.dto;

import java.time.LocalDate;
import java.util.UUID;

public record RentDto(UUID clientId, UUID carId, LocalDate rentalStart, LocalDate rentalEnd) {
}
