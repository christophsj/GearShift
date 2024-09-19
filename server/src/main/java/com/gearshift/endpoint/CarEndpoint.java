package com.gearshift.endpoint;

import com.gearshift.dto.*;
import com.gearshift.entity.Car;
import com.gearshift.mapper.CarMapper;
import com.gearshift.service.ICarService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/cars")
@CrossOrigin(origins = "*")
public class CarEndpoint {

    private final ICarService carService;
    private final CarMapper carMapper;

    private final Logger log = LoggerFactory.getLogger(CarEndpoint.class);

    public CarEndpoint(ICarService carService, CarMapper carMapper) {
        this.carService = carService;
        this.carMapper = carMapper;
    }

    @GetMapping("{id}")
    public CarDetailDto getById(@PathVariable UUID id) {
        log.info("Getting car by id: {}", id);
        return carMapper.toDetailDto(carService.getCarById(id));
    }

    @PostMapping
    public CarDto saveCar(@RequestBody CreateCarDto carDto) {
        log.info("Saving car: {}", carDto);
        final Car car = carMapper.toCreateEntity(carDto);
        return carMapper.toDto(carService.save(car));
    }

    @GetMapping
    public PageDto<CarDto> getPage(Pageable pageRequest) {
        log.info("Getting cars page: {}", pageRequest);
        return new PageDto<>(carService.getPage(pageRequest)
                .stream()
                .map(carMapper::toDto)
                .toList(), pageRequest.getPageNumber());
    }

    @PutMapping
    public CarDto updateCar(@RequestBody CarDto carDto) {
        log.info("Updating car: {}", carDto);
        final Car car = carMapper.toEntity(carDto);
        return carMapper.toDto(carService.save(car));
    }

    @DeleteMapping("{id}")
    public void deleteCar(@PathVariable UUID id) {
        log.info("Deleting car by id: {}", id);
        carService.delete(id);
    }

    @GetMapping("/models")
    public List<CarModelDto> getModels(GetCarModelDto carModelDto) {
        log.info("Getting car models: {}", carModelDto);
        return carService.searchModels(carModelDto.model(), carModelDto.make(), carModelDto.year())
                .stream()
                .map(carMapper::toModelDto)
                .toList();
    }
}
