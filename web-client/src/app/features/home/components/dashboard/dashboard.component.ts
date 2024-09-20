import { Component, inject } from '@angular/core';
import { RentService } from '../../../cars/services/rent.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  overview = inject(RentService).getRentOverview().result$;

}
