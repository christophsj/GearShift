package com.gearshift.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Entity

@Getter
@Setter
@NoArgsConstructor
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", nullable = false)
    private UUID id;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "model_id")
    private CarModel model;

    @Column(name = "kilometers", nullable = false)
    private int kilometers;

    @Column(name = "registered_at", nullable = false)
    private LocalDate registeredAt;

    @Column(name = "rent_status", nullable = false)
    private RentStatus rentStatus = RentStatus.RETURNED;

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    private List<RentedCar> rentals;
}
