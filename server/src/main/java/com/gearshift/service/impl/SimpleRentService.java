package com.gearshift.service.impl;

import com.gearshift.entity.Car;
import com.gearshift.entity.Client;
import com.gearshift.entity.RentStatus;
import com.gearshift.entity.RentedCar;
import com.gearshift.exception.NotFoundException;
import com.gearshift.exception.RentException;
import com.gearshift.repository.CarRepository;
import com.gearshift.repository.ClientRepository;
import com.gearshift.service.IRentService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class SimpleRentService implements IRentService {

    private final CarRepository carRepository;
    private final ClientRepository clientRepository;

    public SimpleRentService(CarRepository carRepository, ClientRepository clientRepository) {
        this.carRepository = carRepository;
        this.clientRepository = clientRepository;
    }

    public void returnCar(UUID carId) {
        Car car = carRepository.findById(carId).orElseThrow(NotFoundException::new);

        if (car.getRentStatus().equals(RentStatus.RETURNED)) {
            throw new IllegalArgumentException("Car is already returned");
        }

        car.setRentStatus(RentStatus.RETURNED);
        carRepository.save(car);
    }


    @Override
    public Car rent(UUID clientId, UUID carId, LocalDate rentalStart, LocalDate rentalEnd) {
        Car car = carRepository.findById(carId).orElseThrow(NotFoundException::new);

        if (car.getRentStatus().equals(RentStatus.RENTED)) {
            throw new RentException("Car is already rented");
        }

        if (rentalStart.isAfter(rentalEnd)) {
            throw new IllegalArgumentException("Rental start date is after rental end date");
        }

        car.setRentStatus(RentStatus.RENTED);
        Client client = clientRepository.findById(clientId).orElseThrow(NotFoundException::new);

        List<RentedCar> updatedRentals = new ArrayList<>((car.getRentals()));
        updatedRentals.add(
                RentedCar.builder()
                        .car(car)
                        .client(client)
                        .rentalStart(rentalStart)
                        .rentalEnd(rentalEnd)
                        .build()
        );
        car.setRentals(
                updatedRentals
        );
        return carRepository.save(car);
    }

}
