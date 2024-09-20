package com.gearshift.repository;

import com.gearshift.entity.Car;
import com.gearshift.entity.RentStatus;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;
import java.util.UUID;

public interface CarRepository extends PagingAndSortingRepository<Car, UUID> {

    Optional<Car> findById(UUID id);

    Car save(Car entity);

    void deleteById(UUID id);

    Integer countAllByRentStatus(RentStatus rentStatus);
}