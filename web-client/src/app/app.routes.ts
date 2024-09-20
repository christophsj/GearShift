import { Routes } from '@angular/router';
import { CarCreateComponent } from './features/cars/components/car-create/car-create.component';
import { CarsListComponent } from './features/cars/components/cars-list/cars-list.component';
import { ClientListComponent } from './features/clients/components/client-list/client-list.component';
import { ClientCreateComponent } from './features/clients/components/client-create/client-create.component';
import { ClientDetailComponent } from './features/clients/components/client-detail/client-detail.component';
import { CarDetailComponent } from './features/cars/components/cars-detail/cars-detail.component';
import { DashboardComponent } from './features/home/components/dashboard/dashboard.component';

export const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
  }, 
  {
    path: 'cars',
    component: CarsListComponent,
  },
  {
    path: 'cars/create',
    component: CarCreateComponent
  },
  {
    path: 'cars/:id',
    component: CarDetailComponent
  }, 
  {
    path: 'clients',
    component: ClientListComponent,
  },
  {
    path: 'clients/create',
    component: ClientCreateComponent
  },
  {
    path: 'clients/:id',
    component: ClientDetailComponent
  }
];
