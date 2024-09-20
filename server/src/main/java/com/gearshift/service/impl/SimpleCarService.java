package com.gearshift.service.impl;

import com.gearshift.entity.*;
import com.gearshift.exception.NotFoundException;
import com.gearshift.repository.CarModelRepository;
import com.gearshift.repository.CarRepository;
import com.gearshift.service.ICarService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SimpleCarService implements ICarService {

    private final CarRepository carRepository;
    private final CarModelRepository carModelRepository;

    public SimpleCarService(CarRepository carRepository, CarModelRepository carModelRepository) {
        this.carRepository = carRepository;
        this.carModelRepository = carModelRepository;
    }


    @Override
    public Car getCarById(UUID id) {
        return carRepository.findById(id).orElseThrow(NotFoundException::new);
    }

    @Override
    public Page<Car> getPage(Pageable pageRequest) {
        return carRepository.findAll(pageRequest);
    }

    @Override
    public Car save(Car car) {
        if (car.getModel().getId() != null) {
            car.setModel(carModelRepository.findById(car.getModel().getId()).orElseThrow(NotFoundException::new));
        }
        return carRepository.save(car);
    }

    @Override
    public List<CarModel> searchModels(String model, String make, String year) {
        return carModelRepository.findTop10ByModelContainingIgnoreCaseAndMakeContainingIgnoreCaseAndYearContainingIgnoreCase(
                Optional.ofNullable(model).orElse(""),
                Optional.ofNullable(make).orElse(""),
                Optional.ofNullable(year).orElse("")
        );
    }

    @Override
    public void delete(UUID id) {
        carRepository.deleteById(id);
    }

    @Override
    public Integer countRentedCars() {
        return carRepository.countAllByRentStatus(RentStatus.RENTED);
    }

}
