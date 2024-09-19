package com.gearshift.dto;

import java.util.UUID;

public record CarModelDto(UUID id, String make, String model, String year) {
}
