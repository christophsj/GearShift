package com.gearshift.repository;

import com.gearshift.entity.CarModel;
import org.springframework.data.domain.Limit;
import org.springframework.data.repository.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CarModelRepository extends Repository<CarModel, UUID> {

    Optional<CarModel> findById(UUID id);

    List<CarModel> findTop10ByModelContainingIgnoreCaseAndMakeContainingIgnoreCaseAndYearContainingIgnoreCase(String model, String make, String year);
}