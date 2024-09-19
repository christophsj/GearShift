import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GridComponent,
  GridItem,
} from '../../../../core/components/grid/grid.component';
import { CarService } from '../../services/car.service';
import { Car } from '../../dtos/car';
import { PageResponse } from '../../../../core/dto/page';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CommonModule, GridComponent],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss',
})
export class CarsListComponent {
  cars = inject(CarService).getCars();

  toListItems(responses: PageResponse<Car>[]): GridItem[] {
    return responses.flatMap((response) =>
      response.data.map((car) => this.toListItem(car))
    );
  }

  private toListItem(car: Car) {
    console.log(car);
    return {
      title: `${car.model.make} ${car.model.model}`,
      text: `Milage: ${car.kilometers}`,
      link: ['/cars', car.id],
    };
  }
}
