import { Component, inject } from '@angular/core';
import { CarService } from '../../services/car.service';
import { ActivatedRoute, Route } from '@angular/router';
import { QueryObserverResult } from '@ngneat/query';
import { CarDetail } from '../../dtos/car';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cars-detail.component.html',
  styleUrl: './cars-detail.component.scss'
})
export class CarDetailComponent {

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.params['id'];
    this.car = inject(CarService).getCar(id).result$;
  }

  car: Observable<QueryObserverResult<CarDetail, Error>>;
}
