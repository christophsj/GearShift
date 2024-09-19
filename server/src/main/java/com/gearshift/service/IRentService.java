package com.gearshift.service;

import com.gearshift.entity.Car;
import com.gearshift.entity.CarModel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public interface IRentService {

    /**
     * Set a cars as rented
     * @param clientId the id of the client
     * @param carId the id of the car
     * @param rentalStart the start date of the rental
     * @param rentalEnd the end date of the rental
     * @return the updated car
     */
    Car rent(UUID clientId, UUID carId, LocalDate rentalStart, LocalDate rentalEnd);

    /**
     * Set a car as returned
     */
    void returnCar(UUID carId);
}
