package com.gearshift.service;

import com.gearshift.entity.Car;
import com.gearshift.entity.CarModel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

public interface ICarService {

    /**
     * Get a car by its id
     * @param id the id of the car
     * @return the car
     */
    Car getCarById(UUID id);

    /**
     * Get a page of cars
     * @param pageRequest the page request
     * @return the page of cars
     */
    Page<Car> getPage(Pageable pageRequest);

    /**
     * Save a car
     * @param car the car to save
     * @return the saved car
     */
    Car save(Car car);

    /**
     * Get a list of car models
     * @param name filter by (partial) name
     * @param make filter by (partial) make
     * @param year filter by (partial) year
     * @return list of matching car models
     */
    List<CarModel> searchModels(String name, String make, String year);

    /**
     * Delete a car
     * @param id the id of the car to delete
     */
    void delete(UUID id);

    /**
     * Count number of currently rented cars
     */
    Integer countRentedCars();
}
