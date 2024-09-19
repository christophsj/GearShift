package com.gearshift.dto;


import com.gearshift.entity.RentedCar;

import java.util.List;

public record ClientDetailDto(String name, String email, String phone, AddressDto address,
                              List<RentedCarDto> rentals) {
}
