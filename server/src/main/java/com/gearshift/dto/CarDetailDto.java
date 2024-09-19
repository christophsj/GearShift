package com.gearshift.dto;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public record CarDetailDto(UUID id, int kilometers, LocalDate registeredAt, CarModelDto model,
                           List<RentedCarDto> rentals) {
}
