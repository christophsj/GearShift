package com.gearshift.endpoint;

import com.gearshift.dto.CarDetailDto;
import com.gearshift.dto.RentDto;
import com.gearshift.dto.RentOverviewDto;
import com.gearshift.dto.ReturnCarDto;
import com.gearshift.mapper.CarMapper;
import com.gearshift.service.ICarService;
import com.gearshift.service.IRentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rent")
@CrossOrigin(origins = "*")
@Slf4j
public class RentEndpoint {

    private final IRentService rentService;
    private final ICarService carService;
    private final CarMapper carMapper;

    public RentEndpoint(IRentService rentService, ICarService carService, CarMapper carMapper) {
        this.rentService = rentService;
        this.carService = carService;
        this.carMapper = carMapper;
    }

    @PostMapping
    CarDetailDto rent(@RequestBody RentDto rentDto) {
        log.info("Renting car: {}", rentDto);
        return carMapper.toDetailDto(rentService.rent(rentDto.clientId(), rentDto.carId(), rentDto.rentalStart(), rentDto.rentalEnd()));
    }

    @PostMapping("return")
    void returnCar(@RequestBody ReturnCarDto carDto) {
        log.info("Returning car: {}", carDto);
        rentService.returnCar(carDto.carId());
    }

    @GetMapping
    RentOverviewDto getRentOverview() {
        log.info("Getting rent overview");
        return new RentOverviewDto(
                carService.countRentedCars()
        );
    }
}
