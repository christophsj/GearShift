package com.gearshift.mapper;

import com.gearshift.dto.*;
import com.gearshift.entity.Car;
import com.gearshift.entity.CarModel;
import com.gearshift.entity.Client;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CarMapper {

    CarDto toDto(Car car);

    Car toCreateEntity(CreateCarDto createCarDto);

    Car toEntity(CarDto carDto);

    CarModelDto toModelDto(CarModel carModel);

    CarModel toModelEntity(CarModelDto carModelDto);

    CarDetailDto toDetailDto(Car car);
}