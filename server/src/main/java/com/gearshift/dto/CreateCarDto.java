package com.gearshift.dto;

import java.time.LocalDate;

public record CreateCarDto(CarModelDto model, LocalDate registeredAt, int kilometers, String color) {
}
